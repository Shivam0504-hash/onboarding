import { Image, StyleSheet, Text, View ,Dimensions} from 'react-native'
import React, { useState } from 'react'
import ReusableInputBox from '../component/reuseableinputbox'
import { Icons } from '../assets'
import ReusableButton from '../component/reusablebutton'
import CustomModal from '../component/model'
import Toast from 'react-native-toast-message';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const ResetPassword = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [isFocused, setIsFocused] = useState(false);

  
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')


    const [isLoginEnabled, setIsLoginEnabled] = useState(false)

    const [isLengthValid, setIsLengthValid] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasUpperAndLower, setHasUpperAndLower] = useState(false);


    const validatePassword = (text: string) => {
        setPassword(text)

        setIsLengthValid(text.length >= 8);
        setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(text));
        setHasNumber(/\d/.test(text));
        const hasUppercase = /[A-Z]/.test(text);
        const hasLowercase = /[a-z]/.test(text);
        setHasUpperAndLower(hasUppercase && hasLowercase);
    }



    const validateConfirmPassword = (text: string) => {
        setConfirmPassword(text)
        setIsLoginEnabled(true)
    }

    const checkPasswordsMatch=()=>{
        {
            if (password !== confirmPassword) {
                Toast.show({
                    type: 'tomatoToast',
                    text1: 'Your password does not match.',
    
                });
                
                setPasswordError('Passwords do not match');
                setConfirmPasswordError('Passwords do not match');
            } else {
                setModalVisible(true)
                setPasswordError('');
                setConfirmPasswordError('');
            }
        }
    }


    return (
        <View style={styles.container}>
            <Image source={Icons.quiviologo} style={styles.img} />
            <View style={styles.innercontainer}>
                <Text style={styles.signin}>Forgot Password</Text>
                <Text style={styles.credentials}>Reset your password with just a few clicks</Text>
            </View>
            

            <View style={styles.emailcontainer }>
                <View style={!isFocused && { gap: 20 }}>
                    <View>
                        <ReusableInputBox
                            label="Password"
                            icon={passwordError ? Icons.errorlock : Icons.lock}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            value={password}
                            // onChangeText={(text: string) => passwordValidation(text, setPassword, setPasswordError)}
                            onChangeText={validatePassword}
                            error={passwordError}
                            secureTextEntry={true}
                        />

                        {isFocused && (
                            <View style={styles.bigvalidationcontainer}>
                                <View style={styles.validationcontainer}>
                                    <Image source={isLengthValid ? Icons.right : Icons.cross} style={styles.icon} />
                                    <Text style={styles.textstylevalidation}>8 characters or above</Text>
                                </View>

                                <View style={styles.validationcontainer}>
                                    <Image source={hasSpecialChar ? Icons.right : Icons.cross} style={styles.icon} />
                                    <Text style={styles.textstylevalidation}>1 or more special characters</Text>
                                </View>

                                <View style={styles.validationcontainer}>
                                    <Image source={hasNumber ? Icons.right : Icons.cross} style={styles.icon} />
                                    <Text style={styles.textstylevalidation}>1 or more numbers</Text>
                                </View>

                                <View style={styles.validationcontainer}>
                                    <Image source={hasUpperAndLower ? Icons.right : Icons.cross} style={styles.icon} />
                                    <Text style={styles.textstylevalidation}>Upper and lowercase letters</Text>
                                </View>
                            </View>
                        )}

                    </View>

                    <ReusableInputBox
                        label="Confirm Password"
                        icon={confirmPasswordError ? Icons.errorlock : Icons.lock}
                        
                        onFocus={null}
                        onBlur={null}

                        
                        value={confirmPassword}
                        onChangeText={validateConfirmPassword}
                        error={confirmPasswordError}
                        secureTextEntry={true}
                    />


                </View>
                </View>
                <ReusableButton text='Submit'
                disabled={!isLoginEnabled}
                onPress={checkPasswordsMatch} />

                {modalVisible && (
                <CustomModal
                    navigation={navigation}
                    icon={Icons.linksend}
                    header="Link Sent"
                    subtext="The link to reset your password has been sent to your email address."
                    buttonText="Back to Log In"
                />
            )}
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#E6EDF3',
    },
    
    texterrorstyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 16
    },
    colonerror: {
        width: 14.17,
        height: 14.17,
        resizeMode: 'contain'
    },
    errorText: {
        fontSize: 12,
        marginLeft: 8
    },
    emailcontainer: {
        alignItems: 'center',
        height:'50%',
        justifyContent: 'space-between',
        // backgroundColor:'red'
    },
    validationcontainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 4.25,
        width: 8.5,
        height: 8.5
    },
    textstylevalidation: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 16.9,
        fontFamily: 'Montserrat-Black'

    },
    containerwithbutton: {

    },
    innercontainer:
    {
        marginTop: screenHeight * 0.05633802816,
        marginLeft: screenWidth * 0.06106870229,

    },
    img:
    {
        height: 55,
        width: 83,
        resizeMode: 'contain',
        marginLeft: screenWidth * 0.06106870229,
        marginTop: screenHeight * 0.08333333333,

    },
    signin: {
        fontWeight: '700',
        fontSize: 24,
        letterSpacing: -.03,
        lineHeight: 31.2,
    },
    credentials: {
        color: '#4F5F72',
        marginTop: 4,
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: -.01,
        marginBottom: 27,
    },

    cross: {
        width: 8.5,
        height: 8.5
    },
    bigvalidationcontainer: {
        justifyContent: 'center',
        gap: 7,
        width: '79.643765903%',
        marginTop: 12,
        marginBottom: 28,
        marginLeft: 29
    }
})


