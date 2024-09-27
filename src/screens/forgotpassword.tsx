import { Image, StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Icons } from '../assets'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import ReusableInputBox from '../component/inputbox';
import ReusableButton from '../component/reusablebutton';
import CustomModal from '../component/model';
import Toast from 'react-native-toast-message';
const ForgotPassword = ({ navigation }) => {

    const emailDetails = [{ email: 'Ss@gmail.com' },];

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [isSendEnabled, setIsSendEnabled] = useState(false)
    const [modalVisible,setmodalVisible]=useState(false)




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
    useEffect(() => {
        if (!emailError && email ) {
            setIsSendEnabled(true)
        }
        else {
            setIsSendEnabled(false)
        }
    }, [emailError, email])

    const handleemailcheck = () => {
        const isEmailExist = emailDetails.some(item => item.email === email);
        if (isEmailExist) {
            setmodalVisible(true);
            setEmail('')
        } else {
            Toast.show({
                type: 'tomatoToast',
                text1: 'Email not found. Contact admin.',
               
              });
              setEmailError('Email Not found');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.innercontainer}>
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <Image source={Icons.left} style={styles.img} />
                        </TouchableOpacity>

                        <Text style={styles.signin}>Forgot Password</Text>
                        <Text style={styles.credentials}>Reset your password with just a few clicks</Text>
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


                    </View>
                    <View style={styles.buttoncontainer}>
                    <TouchableOpacity >
                        <ReusableButton text='Send Link'
                        disabled={!isSendEnabled}
                        onPress={handleemailcheck}/>
                    </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {modalVisible && (
                <CustomModal
                    navigation={navigation}
                    icon={Icons.linksend}
                    header="Link Sent"
                    subtext="The link to reset your password has been sent to your email address."
                    buttonText="Back to Log In"
                />
            )}
            
        </KeyboardAvoidingView>

    )
}
export default ForgotPassword;
const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
            backgroundColor: '#E6EDF3',
        },
        innercontainer:
        {
            marginTop: 66,
            marginLeft: 25,
        },
        img:
        {
            height: 48,
            width: 48,

        },
        textboxcontainer: {
            marginTop: 50, // Adjust to space from images
            paddingHorizontal: screenWidth * .07633587786,
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
        buttoncontainer:
        {
            marginTop: 300,


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


    }
)