import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

const ReusableButton = ({ text, disabled, onPress }) => {
    return (
        <TouchableOpacity 
            style={[styles.buttoncontainer, disabled && styles.disabled]} 
            onPress={disabled ? null : onPress}
            disabled={disabled}
        >
            <Text style={styles.buttontext}>{text}</Text>
        </TouchableOpacity>
    );
};

export default ReusableButton;

const styles = StyleSheet.create({
    buttoncontainer: {
        marginTop: 38,
        height: 56,
        width: screenWidth - (2 * 26),
        backgroundColor: '#2A7BBB',

        justifyContent: 'center',
        marginLeft: 27,
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 40,
    },
    disabled: {
        backgroundColor: '#A0C4E1',
        opacity: 0.6,
    },
    buttontext: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20.8,
        color: '#fff',
    },
});
