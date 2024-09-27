import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { Icons } from '../assets'; // Ensure this path is correct

const PasswordBox = ({ placeholder, icon, onChangeText, value, error, secureTextEntry }) => {
    const [focused, setFocused] = useState(false);
    const [animatedLabel] = useState(new Animated.Value(value ? 1 : 0));
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        Animated.timing(animatedLabel, {
            toValue: value || focused ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [value, focused]);

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };

    return (
        <View style={[styles.childrenstyle, error ? styles.errorBorder : null]}>
            <View style={styles.textinputcontainer}>
                <Image source={icon} style={styles.icon} />
                <TextInput
                    
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={onChangeText}
                    value={value}
                    style={styles.textinput}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eye}>
                    <Image source={showPassword ? Icons.eyeclose : Icons.eyeopen} style={styles.eye} /> 
                    
                </TouchableOpacity>
            </View>
            <Animated.Text
                style={[
                    styles.placeholder,
                    {
                        left: 56, 
                        top: animatedLabel.interpolate({
                            inputRange: [0, 1],
                            outputRange: [20, 0],
                        }),
                        fontSize: animatedLabel.interpolate({
                            inputRange: [0, 1],
                            outputRange: [18, 14],
                        }),
                        color: animatedLabel.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['#666', error ? 'red' : '#000'],
                        }),
                    },
                ]}
            >
                {placeholder}
            </Animated.Text>
        </View>
    );
};

export default PasswordBox;


const styles = StyleSheet.create({
    childrenstyle: {
        width: 335,
        height: 60,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: '#F8F9F9',
        padding: 21,
        justifyContent: 'center',
        marginBottom:20,
    },
    textinput: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 56, 
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        position: 'absolute',
    },
    eye: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        position: 'absolute',
        right: 5,
    },
    textinputcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeholder: {
        position: 'absolute',
        left: 56, 
        color: '#666',
        backgroundColor: '#F8F9F9',
        paddingHorizontal: 4,
        zIndex: 1,
    },
    errorBorder: {
        borderColor: 'red',
    },
});
