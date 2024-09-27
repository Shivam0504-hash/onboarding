import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, StyleSheet, Dimensions } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import { Icons } from '../assets';
import ReusableButton from '../component/reusablebutton';
import Toast from 'react-native-toast-message';
import { ScreenNames } from '../navigator/screenNames';
import CustomModal3 from '../component/modal3';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const phoneNumbers = [
  { number: '7607423088' },
];

const AddPhoneNumber = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [isSendEnabled, setIsSendEnabled] = useState(false);
  const [modalVisible,setModalVisible] =useState(false);
  const [flag, setFlag] = useState('🇺🇸');

  const onSelect = (country) => {
    if (country && country.code && country.dial_code) {
      setCountryCode(country.code);
      setCallingCode(country.dial_code.replace('+', ''));
      setFlag(country.flag);
      setShowPicker(false);
    } else {
      console.error('Invalid country data received:', country);
    }
  };

  const  handleshowmodal=()=>
  {
    setModalVisible(true)
  }

  const validation = (value) => {
    const filteredValue = value.replace(/[^0-9]/g, '');
    setPhoneNumber(filteredValue);
    setIsSendEnabled(filteredValue.length > 0); 
  };

  const handlePhone = () => {
    const fullPhoneNumber = callingCode + phoneNumber;
    const exists = phoneNumbers.some(phone => phone.number === phoneNumber);

    if (exists) {
        Toast.show({
            type: 'tomatoToast',
            text1: 'User exists. Try a different number.',
          });
    } else {
        // Pass phoneNumber to AccountVerify
        navigation.push(ScreenNames.AccountVerify, { phoneNumber: fullPhoneNumber });
    }
  };

  const togglePicker = () => {
    setShowPicker(prev => !prev);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardShouldPersistTaps='handled'>
      <View style={styles.innercontainer}>
        <TouchableOpacity onPress={handleshowmodal}>
          <Image source={Icons.left} style={styles.img} />
        </TouchableOpacity>

        <Text style={styles.signin}>Add Phone Number</Text>
        <Text style={styles.credentials}>To initiate the two-factor authentication, provide your phone number below.</Text>
      </View>

      <View style={styles.buttontext}>
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity
            style={styles.countryPickerContainer}
            onPress={togglePicker}
          >
            <Text style={styles.flagText}>{flag}</Text>
            <CountryPicker
              show={showPicker}
              pickerButtonOnPress={onSelect}
              onBackdropPress={togglePicker}
            />
          </TouchableOpacity>

          <View style={styles.phoneInputBox}>
            <Text style={styles.callingCode}>+{callingCode}</Text>
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={validation}
              keyboardType="numeric"
            />
          </View>
        </View>

        <ReusableButton
          text='Send Code'
          disabled={!isSendEnabled}
          onPress={handlePhone}
        />
      </View>

      {modalVisible && (
                <CustomModal3
                    navigation={navigation}
                    icon={Icons.exist}
                    header="Link Sent"
                    subtext="The link to reset your password has been sent to your email address."
                    buttonText1="No, Continue"
                    buttonText2="Yes, Exit"
                />
            )}
            
    </KeyboardAvoidingView>
    
    
  );
};

export default AddPhoneNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EDF3',
  },
  innercontainer: {
    marginTop: 66,
    marginLeft: 25,
    paddingRight: 20,
  },
  img: {
    height: 48,
    width: 48,
  },
  signin: {
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: -0.03,
    lineHeight: 31.2,
    marginTop: 60,
  },
  credentials: {
    color: '#4F5F72',
    marginTop: 8,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: -0.01,
    marginBottom: 32,
  },
  buttontext: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: screenHeight * 0.58779342723,
  },
  phoneInputContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  countryPickerContainer: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 10,
    height: 60,
  },
  flagText: {
    fontSize: 20,
  },
  phoneInputBox: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: 'white',
  },
  callingCode: {
    fontSize: 18,
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    fontWeight: '500',
    color: '#60707D',
    backgroundColor: 'white',
  },
});
