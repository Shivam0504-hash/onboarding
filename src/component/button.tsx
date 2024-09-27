import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const ButtonInput = ({text}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttoncontainer}>
        <Text style={styles.buttontext}>{text}</Text>

      </View>
    </View>
  )
}
export default ButtonInput;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
    },
    buttoncontainer:
    {
        width:windowWidth*0.85981308411,
        height:windowHeight*0.06322444678,
        borderRadius:16,
        borderWidth:1,
        marginTop:5,
        backgroundColor:"#000080",
        justifyContent:'center',
        alignItems:'center',
    },
    buttontext:
    {
        fontSize:16,
        fontWeight:'700',
        lineHeight:26,
        color:'#fff'
    }
})