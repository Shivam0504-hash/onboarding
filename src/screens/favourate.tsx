import React, { useState } from 'react';
import { View, Text,StyleSheet} from 'react-native';
const Favourite =()=>
{
    return(
        <View style={styles.container}> 
            <Text style={styles.heading}>Your favourate</Text>
        </View>
    )
}

export default Favourite;

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
