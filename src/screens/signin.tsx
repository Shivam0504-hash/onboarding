import { Image, StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icons } from '../assets'
import ReusableInputBox from '../component/inputbox';
import AutoScroll from "@homielab/react-native-auto-scroll";
import PasswordBox from '../component/password';
import ReusableButton from '../component/reusablebutton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ScreenNames } from '../navigator/screenNames';
import Toast from 'react-native-toast-message';
import CustomModal from '../component/model';
import CustomModal2 from '../component/model2';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



const users = [{
    email: 'Ss@gmail.com',
    passsword: 'Shiva12345'
}]

const SignIn = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [isSigninEnabled, setIsSigninEnabled] = useState(false)
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [ModalVisible, setModalVisible] = useState(false);


    const emailValidation = (text) => {
        const regex = /^[\w.+\-]+@gmail\.com$/;
        if (!text) {
            setEmailError('Email is required.');
        } else if (!regex.test(text)) {
            setEmailError('Invalid email address entered.');
        } else {
            setEmailError('');
        }
        setEmail(text);
    }

    const passwordValidation = (text) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!text) {
            setPasswordError('Password is required.');
        } else if (!regex.test(text)) {
            setPasswordError('Invalid password entered.');
        } else {
            setPasswordError('');
        }
        setPassword(text);
    }
    useEffect(() => {
        if (!emailError && !passwordError && email && password) {
            setIsSigninEnabled(true)
        }
        else {
            setIsSigninEnabled(false)
        }
    }, [emailError, passwordError, email, password])

    const handleSignIn = () => {
        const user = users.find(user => user.email === email && user.passsword === password);

        if (user) {

              setModalVisible(true);
              setEmail('')
              setPassword('')

        } else {
            setLoginAttempts(prevAttempts => prevAttempts + 1);
            Toast.show({
                type: 'tomatoToast',
                text1: 'Invalid credentials. Please try again',
              });
            // console.log(loginAttempts);
            if (loginAttempts + 1 >= 3) {
                setIsModalVisible(true);
                setEmail('')
              setPassword('')
            }
        }
    };



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.scrollContainer}
                    enableOnAndroid={true}
                    extraHeight={150}
                    keyboardShouldPersistTaps="handled"
                >
                    <Image source={Icons.bigheader} style={styles.bigheaderstyle} />

                    <View style={styles.logocontainer}>
                        <Image source={Icons.logo} style={styles.logo} />
                        <Image source={Icons.textquivio} style={styles.text} />
                        <Image source={Icons.line} style={styles.line} />

                        <AutoScroll endPaddingWidth={50}>
                            <View style={styles.bottomcontainer}>
                                <Image source={Icons.asethetical} style={styles.img} />
                                <Image source={Icons.real} style={styles.img} />
                                <Image source={Icons.track} style={styles.img} />
                            </View>
                        </AutoScroll>
                    </View>

                    
                    <View style={styles.textboxcontainer}>
                        <Text style={styles.signin}>Sign in</Text>
                        <Text style={styles.credentials}>with your valid credentials</Text>
                        <ReusableInputBox
                            placeholder="Email Address"
                            icon={emailError ? Icons.errormail : Icons.mail}
                            onChangeText={emailValidation}
                            value={email}
                            error={emailError}
                        />
                        {emailError ?
                            <View style={styles.texterrorstyle}>
                                <Image source={Icons.collen} style={styles.colonerror} />
                                <Text style={styles.errorText}>{emailError}</Text>
                            </View>
                            : null}

                        {!emailError ? <View style={styles.verticalspace}></View> : null}
                        <PasswordBox
                            placeholder="Password"
                            icon={passwordError ? Icons.errorlock : Icons.lock}
                            onChangeText={passwordValidation}
                            error={passwordError}
                            secureTextEntry={true}
                            value={password}

                        />
                        {passwordError ?
                            <View style={styles.texterrorstyle}>
                                <Image source={Icons.collen} style={styles.colonerror} />
                                <Text style={styles.errorText}>{passwordError}</Text>
                            </View>
                            : null}

                        {!passwordError ? <View style={styles.verticalspacep}></View> : null}
                    </View>
                    <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.push(ScreenNames.ResetPassword)} >
                        <Text style={styles.reset}>Reset Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.push(ScreenNames.ForgotPassword)} >
                        <Text style={styles.forgot}>Forgot Password</Text>
                    </TouchableOpacity>
                    
                    </View>
                    <ReusableButton
                        text="Primary"
                        disabled={!isSigninEnabled}
                        onPress={handleSignIn} 
                    />

                </KeyboardAwareScrollView>
                {isModalVisible && ( <CustomModal 
                navigation={navigation}
                 icon={Icons.lockopen}
                 header='Account Locked'
                 subtext= 'Your account has been locked due to too many failed attempts. Please try again after some time.'
                buttonText='Okay'
                visible={isModalVisible}
                    
                />)}
                {ModalVisible && ( <CustomModal2 navigation={navigation}
                 icon={Icons.twofactor}
                 header='Secure your Account ?'
                 subtext= 'Setup two-factor authentication to secure your account in just two steps.'
                buttonText='Get Started'
                visible={ModalVisible}
                    
                />)}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e7edf3",
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    bigheaderstyle: {
        width: screenWidth,
        height: screenHeight * 0.43,
    },
    logocontainer: {
        top: screenHeight * 0.10965962441,
        left: screenWidth * .07633587786,
        position: 'absolute',
    },
    logo: {
        width: 82,
        height: 55.14,
        resizeMode: 'contain',
    },
    text: {
        height: 64,
        width: 266,
        resizeMode: 'contain',
        marginTop: 27.3,
    },
    line: {
        width: 71,
        height: 3,
        resizeMode: 'contain',
        marginTop: 30,
    },
    bottomcontainer: {
        flexDirection: 'row',
        height: 34,
        width: screenWidth,
        marginTop: 30,
    },
    img: {
        height: 34,
        width: 140,
        resizeMode: 'contain',
    },
    textboxcontainer: {
        marginTop: 50, 
        paddingHorizontal: screenWidth * .07633587786,
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
    reset: {
        textAlign: 'right',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: -0.02,
        width: 118,
        marginLeft: 20,
    },
    forgot: {
        textAlign: 'right',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19.6,
        letterSpacing: -0.02,
        width: 118,
        marginLeft: 115,
        
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
    verticalspace: {
        height: 20
    },
    verticalspacep: {
        height: 28
    },
    row:
    {
        flexDirection:'row',
    }
});
