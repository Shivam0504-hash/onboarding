import React from 'react';
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Icons } from '../assets';
import CustomButtonWithText from '../component/frequently';
import Notification from '../component/notification';
import Activities from '../component/activities';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({ navigation }) => {
  // const handleLogout = async () => {
  //   await AsyncStorage.setItem('isLogin', 'false');
  //   navigation.navigate('Login');
  // };

  const activityList = Array.from({ length: 10 }); 

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.TopNav}>
        <View >
          <Text style={styles.welcText}>Welcome</Text>
          <Text style={styles.name}>Kelvin</Text>
        </View>
        <View style={styles.rightNav}>
          <View style={styles.iconContainer}>
            <Image style={styles.iconstyle} source={Icons.message} />
          </View>
          <TouchableOpacity style={styles.iconContainer} >
            <Image style={styles.iconstyle} source={Icons.bell} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.notification}>
          <Notification />
        </View>
        <Text style={styles.heading}>FREQUENTLY USED</Text>
        <View style={styles.frequentlyContainer}>
          <CustomButtonWithText title={'Calendar'} />
          <CustomButtonWithText title={'Customer'} />
          <CustomButtonWithText title={'Messages'} />
        </View>
        <Text style={styles.heading}>ACTIVITIES</Text>
        <View style={styles.activitiesContainer}>
          {activityList.map((_, index) => (
            <Activities key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopNav: {
    backgroundColor: '#2a7bbb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  rightNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  welcText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '300',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  iconContainer: {
    backgroundColor: '#3e88c2',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconstyle: {
    height: 25,
    width: 25,
  },
  bodyContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: '#e7edf3',
    flex: 1,
  },
  frequentlyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  notification: {
    paddingBottom: 20,
  },
  heading: {
    fontSize: 12,
    fontWeight: '600',
    paddingBottom: 10,
  },
  activitiesContainer: {
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

export default Home;
