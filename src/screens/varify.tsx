import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Image, Dimensions } from 'react-native';
import { Icons } from '../assets';
import ReusableButton from '../component/reusablebutton';
import CustomModal from '../component/model';
import Toast from 'react-native-toast-message';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AccountVerify = ({ navigation, route }) => {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(3);
  const [errorMessage, setErrorMessage] = useState('');
  const [resendTimer, setResendTimer] = useState(30);
  const [isSendEnabled, setIsSendEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(true); // New state for OTP validity

  const otpArray = [{ otp: '000000' }];
  
  // Create refs for OTP inputs
  const otpRefs = useRef([]);

  useEffect(() => {
    let timer;
    if (isResendDisabled) {
      timer = setInterval(() => {
        setResendTimer((prev) => {
          if (prev > 1) return prev - 1;
          setIsResendDisabled(false);
          return 60;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isResendDisabled]);

  const handleOtpChange = (value, index) => {
    let otpArray = [...otp];

    if (value) {
      otpArray[index] = value;

      // Move to next input
      if (index < otp.length - 1) {
        otpRefs.current[index + 1].focus();
      }
    } else {
      // Handle deletion
      otpArray[index] = ''; // Clear the current input
      if (index > 0) {
        otpRefs.current[index - 1].focus(); // Move focus to the previous input
      }
    }

    setOtp(otpArray);
    setIsSendEnabled(otpArray.every(num => num.length > 0)); // Check if all inputs are filled
  };

  const handleConfirmCode = () => {
    const enteredOtp = otp.join('');
    const otpExists = otpArray.some((item) => item.otp === enteredOtp);

    if (otpExists) {
      setIsOtpValid(true);
      setModalVisible(true);
    } else {
      setErrorMessage(`The code you entered is incorrect, you have ${remainingAttempts - 1} attempts remaining.`);
      setRemainingAttempts((prev) => prev - 1);
      setIsOtpValid(false); // Mark OTP as invalid
      if (remainingAttempts - 1 === 0) {
        setIsModalVisible(true);
      }
    }
  };

  const handleResendCode = () => {
    setIsResendDisabled(true);
    Toast.show({
      type: 'info',
      text1: 'A new code has been sent.',
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innercontainer}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image source={Icons.left} style={styles.img} />
        </TouchableOpacity>
        <View style={styles.textconatiner}>
          <Text style={styles.signin}>Verify Account Access</Text>
          <Text style={styles.credentials}>Enter the verification code sent to +{phoneNumber}</Text>
        </View>

        <View style={styles.otpContainer}>
          {otp.map((item, index) => (
            <TextInput
              key={index}
              ref={(el) => (otpRefs.current[index] = el)} // Set ref for each input
              style={[
                styles.otpBox,
                errorMessage && { borderColor: isOtpValid ? '#E0E0E0' : 'red' }, // Change border color based on OTP validity
              ]}
              value={item}
              onChangeText={(text) => handleOtpChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace' && item === '') {
                  // Move focus back to the previous input when backspace is pressed on an empty field
                  if (index > 0) {
                    otpRefs.current[index - 1].focus();
                  }
                }
              }}
            />
          ))}
        </View>

        {errorMessage ? (
          <View style={styles.texterrorstyle}>
            <Image source={Icons.collen} style={styles.colonerror} />
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        ) : null}

        <TouchableOpacity
          style={styles.resendButton}
          disabled={isResendDisabled}
          onPress={handleResendCode}
        >
          <Text style={styles.resendText}>
            {isResendDisabled ? `Resend in ${resendTimer} seconds ` : 'Resend'}
          </Text>
        </TouchableOpacity>
      </View>

      <ReusableButton
        text='Send Link'
        disabled={!isSendEnabled}
        onPress={handleConfirmCode}
      />

      {modalVisible && (
        <CustomModal
          navigation={navigation}
          icon={Icons.verified}
          header="Account Verified!"
          subtext="Your account has been verified successfully."
          buttonText="Back to Login"
        />
      )}
      {isModalVisible && (
        <CustomModal
          navigation={navigation}
          icon={Icons.faild}
          header="Too many failed attempts"
          subtext="Your account has been locked, please try again in one hour."
          buttonText="Back to Login"
        />
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EDF3',
  },
  innercontainer: {
    marginTop: 66,
    marginLeft: 25,
    paddingRight: 25,
    height: screenHeight * 0.68779342723,
  },
  img: {
    height: 48,
    width: 48,
  },
  signin: {
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: -.03,
    lineHeight: 31.2,
    marginTop: 60,
  },
  credentials: {
    color: '#4F5F72',
    marginTop: 8,
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: -.01,
    marginBottom: 32,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 60,
    padding: 16,
  },
  textconatiner: {
    paddingRight: 50,
  },
  otpBox: {
    width: 35,
    height: 28,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    textAlign: 'center',
    fontSize: 18,
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderBottomColor: '#fff',
  },
  texterrorstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 16,
  },
  colonerror: {
    width: 14.17,
    height: 14.17,
    resizeMode: 'contain',
  },
  resendButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  resendText: {
    color: '#081017',
    fontWeight: '500',
  },
  confirmButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 12,
    marginLeft: 8,
    color: 'red',
  },
});

export default AccountVerify;
