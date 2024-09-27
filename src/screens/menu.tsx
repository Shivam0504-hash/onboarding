import React, { useState } from 'react';
import { View, Text,StyleSheet} from 'react-native';
const Menu =()=>
{
    return(
        <View style={styles.container}> 
            <Text style={styles.heading}>Welcome to Menu</Text>
        </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    heading:
    {
        fontSize:30,
        color:'#000',
    }
})
