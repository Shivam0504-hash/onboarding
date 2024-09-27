import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React,{useState} from 'react'
import { CountryPicker } from 'react-native-country-codes-picker';
import { TextInput } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const Phonenumber = ({ label, value, onChangeText }) => {
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [showPicker, setShowPicker] = useState(false);
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

  const togglePicker = () => {
    setShowPicker(prev => !prev);
  };

  return (
    <View style={styles.phoneInputContainer}>
          <TouchableOpacity
            onPress={togglePicker}
          >
            <View style={styles.countryPickerContainer}>
            <Text style={styles.flagText}>{flag}</Text>
            <Text style={styles.callingCode}>+{callingCode} ▼</Text>
            <CountryPicker
              show={showPicker}
              pickerButtonOnPress={onSelect}
              onBackdropPress={togglePicker}
            />
            </View>
          </TouchableOpacity>
          

          
            <TextInput
               label={label}
               value={value}
               onChangeText={onChangeText}
               mode="outlined"
               style={styles.input}
              keyboardType="numeric"
              outlineColor='#E7EBF3'
              theme={{roundness:30}}
            />
          
        </View>
  )
}

export default Phonenumber;

const styles = StyleSheet.create({

    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //  backgroundColor:'yellow'
      },
      countryPickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth:1,
        borderColor:'#E7EBF3',
        marginRight: 5,
        height: windowHeight * 0.06322444678,
        width:80,
      },
      flagText: {
        fontSize: 22,
      },
      callingCode: {
        fontSize: 14,
        marginRight: 10,
      },
      input: {
        backgroundColor: 'white',
        width:windowWidth*0.6238317757,
        marginBottom: windowHeight * 0.01028977871,
        height: windowHeight * 0.06322444678,
    },
})