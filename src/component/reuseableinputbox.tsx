import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Icons } from '../assets';
import { TextInput } from 'react-native-paper';


const ReusableInputBox = ({ label, onChangeText, value, icon, onFocus, onBlur, error, secureTextEntry }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };
    return (
        <View style={[styles.childrenstyle, error ? styles.errorBorder : null]}>
            <View style={styles.textinputcontainer}>
                <View>
                    <Image source={icon} style={styles.icon} />
                </View>

                <TextInput
                    label={label}
                    onChangeText={onChangeText}
                    value={value}
                    style={[styles.textinput, { backgroundColor: '#F8F9F9' }]}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    secureTextEntry={!showPassword}
                    


                    underlineColor={error ? "red" : "transparent"}
                    textColor="black"
                    activeUnderlineColor={error ? "red" : "black"}
                    mode="flat"
                    theme={{
                        colors: {
                            primary: 'black',
                            background: 'white',    
                            placeholder: 'gray',    
                            text: 'black',          
                            error: 'red' 
                        },
                    }}
                    underlineStyle={
                        {display:'none'}
                    }

                    
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eye}>
                    <Image source={showPassword ? Icons.eyeclose : Icons.eyeopen} style={styles.eye} /> 
                    
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ReusableInputBox

const styles = StyleSheet.create({
    childrenstyle: {
        width: 345,
        height: 60,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: '#F8F9F9',
        padding: 21,
        justifyContent: 'center',
    },
    textinput: {
        overflow: 'hidden',

        width:"70%",

        height:58
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginRight: 18
    },
    textinputcontainer: {
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems:'center'
    },
    errorBorder: {
        borderColor: 'red',
    },
    eye: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        position: 'absolute',
        right: 5,
    },
})