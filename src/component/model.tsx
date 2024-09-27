import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScreenNames } from '../navigator/screenNames';

const CustomModal = ({ icon, header, subtext, buttonText,navigation }) => {
  const [ModalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    setModalVisible(!ModalVisible);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={ModalVisible}
      onRequestClose={handleCloseModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image source={icon} style={styles.modallock} />
          <Text style={styles.modalText}>{header}</Text>
          <Text style={styles.modaldesc}>{subtext}</Text>
          <TouchableOpacity onPress={() => {
                        setModalVisible(false)
                        navigation.navigate(ScreenNames.SignIn)
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  modalView: {
    width: 346,
    height: 300,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modallock: {
    width: 50,
    height:50,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  modalText: {
    marginBottom: 6,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 26,
  },
  modaldesc: {
    width: 249,
    textAlign: 'center',
    marginBottom: 28,
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 19.5,
    color: '#4D5876',
    fontFamily: 'Montserrat-Light',
  },
  button: {
    borderRadius: 8,
    elevation: 2,
    width: 126.5,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClose: {
    backgroundColor: '#2A7BBB',
  },
  textStyle: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CustomModal;