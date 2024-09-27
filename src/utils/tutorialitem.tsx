import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
const Windowwidth=Dimensions.get('window').width;

const Tutorialitem = ({ item }) => {
  
  
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View>
        <Text style={styles.onboardingtitle}>{item.title}</Text>
        <Text style={styles.onboardingdesc}>{item.description}</Text>
      </View>
    </View>
  );
};

export default Tutorialitem;

const styles = StyleSheet.create({
  container:
  {
    flex:1,
    width:Windowwidth,

  },

  image: {
    justifyContent: 'center',
    height: 600,
    width: Windowwidth,
    resizeMode:'contain',
  },
  onboardingtitle: {
    fontWeight: '700',
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'center',
  },
  onboardingdesc: {
    textAlign: 'center',
    fontWeight: '400',
    color: 'gray',
    paddingHorizontal: 64,
  },
});