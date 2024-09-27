import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Icons } from '../assets';
import { ScreenNames } from '../navigator/screenNames';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CustomModal2 = ({ icon, header, subtext, buttonText, navigation }) => {
    const [ModalVisible, setModalVisible] = useState(true);

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={ModalVisible}
            onRequestClose={handleCloseModal}
        >
            <View style={styles.centeredView}>
                <TouchableOpacity style={styles.overlay} onPress={handleCloseModal} />
                <View style={styles.modalView}>
                    <Image source={icon} style={styles.modallock} />
                    <Text style={styles.modalText}>{header}</Text>
                    <Text style={styles.modaldesc}>{subtext}</Text>
                    <Image source={Icons.status} style={styles.img2} />
                    <TouchableOpacity onPress={() => {
                        setModalVisible(false)
                        navigation.navigate(ScreenNames.AddphoneNumber)
                    }}>
                        <View style={[styles.button, styles.buttonClose]}>
                            <Text style={styles.textStyle}>{buttonText}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal2;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end', // Aligns the modal at the bottom
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: screenWidth,
        height: 650,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modallock: {
        width: 111,
        height: 148,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    modalText: {
        marginBottom: 6,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 31.2,
    },
    modaldesc: {
        width: 249,
        textAlign: 'center',
        marginBottom: 28,
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 21,
        color: '#4D5876',
    },
    button: {
        marginLeft: 5,
        width: screenWidth - 48,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20,
    },
    buttonClose: {
        backgroundColor: '#2A7BBB',
    },
    textStyle: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
    img2:
    {
        height: 192,
        width: screenWidth - (32 + 43),
    }

});

