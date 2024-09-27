import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icons } from '../assets';

const CustomButtonWithText = ({ title }) => {
  const handlePress = () => {
    console.log('//');
  };

  return (
    <View style={styles.parentContainer}>
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
        <View style={styles.iconContainer}>
          <Image style={styles.announcStyle} source={Icons.announcement} />
        </View>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: 'white',
    height: 110,
    width: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#46a4ba',
    borderRadius: 100,
  },
  text: {
    marginTop: 10, 
    fontSize: 16,
    color: '#000', 
    textAlign: 'center',
  },
  announcStyle: {
    height: 25,
    width: 25,
  },
});

export default CustomButtonWithText;
