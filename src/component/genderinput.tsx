import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, FlatList,Image,Dimensions } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { Icons } from '../assets'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const GenderInput = ({ label, value, onChangeValue }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [options] = useState(['Male', 'Female', "Can't Say"]);

  const handleSelect = (gender) => {
    onChangeValue(gender);
    setModalVisible(false);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        label={label}
        value={value}
        editable={false}  // Make it non-editable
        right={
                    <TextInput.Icon
                        icon={() => (
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Image source={Icons.dropdown} style={styles.icon} />
                            </TouchableOpacity>
                        )}
                    />
                }  // Arrow icon
        mode="outlined"
        style={styles.input}
        outlineColor='#E7EBF3'
        theme={{roundness:30}}
      />
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    height: windowHeight * 0.06322444678,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    maxHeight: '40%',
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
});

export default GenderInput;
