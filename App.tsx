import { View, Text, StyleSheet,Dimensions,Image } from 'react-native';
import React from 'react';
import RootNavigator from './src/navigator';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Icons } from './src/assets';
const screenWidth=Dimensions.get('window').width;
const App = () => {
  const toastConfig = {
    tomatoToast: ({ text1, props }) => (
      <View style={styles.tomatoToast}>
        <Image source={Icons.toss} style={styles.img}/>
        <Text style={styles.tomatoText}>{text1}</Text>
        <Text style={styles.tomatoText}>{props.uuid}</Text>
      </View>
    ),

  };

  return (
    <>
      <RootNavigator />
      <Toast config={toastConfig} />
    </>
  )



  // return <SignIn/>

};

export default App;
const styles = StyleSheet.create({
  tomatoToast: {
    height: 60,
    width: screenWidth-(2*24),
    backgroundColor: '#F04438',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    marginTop:65,
    marginLeft:24,
    marginRight:20,
    flexDirection:'row',
  },
  tomatoText: {
    color: 'white',
    fontSize: 16,
    marginLeft:15,
  },
  img:
  {
    height:28,
    width:28,
    resizeMode:'contain',

  },
})