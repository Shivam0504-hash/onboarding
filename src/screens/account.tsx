import { StyleSheet,  View, Dimensions, Image, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { TextInput,Text} from 'react-native-paper'
import BirthdayInput from '../component/birthdayinput'
import GenderInput from '../component/genderinput'
import ButtonInput from '../component/button'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
import Profilemodal from '../component/profilemodel'
import Phonenumber from '../component/phonenumber'
import { Icons } from '../assets'



const Account = () => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const[modalVisible,setModalVisible]=useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profileImage, setProfileImage] = useState(Icons.profile);

  const updateProfileImage = (imageUri) => {
    setProfileImage({ uri: imageUri });
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity>
          <Image source={Icons.left} style={styles.img} />
        </TouchableOpacity>
        <Text style={styles.text}>Edit Profile</Text>
      </View>
      <View style={styles.elementconatiner}>
        <View style={[{ flexDirection: 'row' }]}>
        <Image source={profileImage} style={styles.profileimge} />
          <View style={styles.profilecontainer}>
            <Text style={styles.profiletext}>Profile Picture</Text>
            <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
              <Text style={styles.phototext}>Change Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputcontainer}>
          <TextInput
            label={'Name'}
            value={name}
            onChangeText={setName}
            keyboardType={'default'}
            mode={'outlined'}
            style={styles.input}
            outlineColor='#E7EBF3'
            theme={{roundness:30}}
          />
          <TextInput
            label={'username'}
            value={username}
            onChangeText={setUserName}
            keyboardType={'default'}
            mode={'outlined'}
            style={styles.input}
            outlineColor='#E7EBF3'
            theme={{roundness:30}}
          />
          <View >
            <BirthdayInput
              label='Birthday'
              value={birthday}
              onChangeDate={setBirthday}
            />
            <GenderInput
              label='Gender'
              value={gender}
              onChangeValue={setGender}
            />
            <Phonenumber 
            label='Phone Number'
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            />
            
            <TextInput
              label={'Email ID'}
              value={email}
              onChangeText={setEmail}
              keyboardType={'default'}
              mode={'outlined'}
              style={styles.input}
              outlineColor='#E7EBF3'
              theme={{roundness:30}}
            //   right={
            //     <TextInput.Icon
            //         icon={() => (
            //           <TouchableOpacity style={[{ width: 65, height: 24 ,position:'absolute'}]}>
            //                <Text style={styles.verifytext}>Verify</Text>
            //              </TouchableOpacity>
            //         )}
                    
            //     />
            // }
          
            />
            <TouchableOpacity>
          <ButtonInput text='Update'/>
          </TouchableOpacity>

          </View>




        </View>

      </View>
      {modalVisible &&(
        <Profilemodal 
          closeModal={() => setModalVisible(false)} 
          updateImage={updateProfileImage} 
        />
      )}
    </View>
  )
}

export default Account;

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
  },
  row:
  {
    flexDirection: 'row',
    marginTop: windowHeight * 0.06954689146,
  },
  img: {
    width: windowWidth * 0.11214953271,
    height: windowHeight * 0.05057955742,
    marginLeft: windowWidth * 0.04672897196,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    width: windowWidth * 0.26598130841,
    height: windowHeight * 0.03793466807,
    marginLeft: windowWidth * 0.22429906542,
    marginTop: windowHeight * 0.00632244467,
    lineHeight: 36,
    fontWeight: 500,
  },
  elementconatiner:
  {
    marginTop: windowHeight * 0.01893466807,
    marginLeft: windowWidth * 0.07476635514,

    alignItems: 'flex-start',
  },
  profileimge:
  {
    width: windowWidth * 0.38710280373,
    height: windowHeight * 0.18752370916,
    justifyContent: 'flex-start',

  },
  profilecontainer:
  {
    marginTop: windowHeight * 0.04847207586,
    marginLeft: windowWidth * 0.04205607476,
    flex: 1,

  },
  profiletext:
  {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    width: windowWidth * 0.24028037383,
    height: windowHeight * 0.02528977871,
    color: '#4B5879',
    marginBottom: windowHeight * 0.00421496311,
  },
  phototext:
  {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    width: windowWidth * 0.28028037383,
    height: windowHeight * 0.02528977871,
    color: '#EE28A9',

  },
  inputcontainer:
  {
    marginTop: windowHeight * 0.00084826132,
  },
  input: {
    backgroundColor: '#fff',
    width: windowWidth * 0.85981308411,
    height: windowHeight * 0.06322444678,
    marginBottom: windowHeight * 0.01028977871,
    borderRadius: 30,
    borderColor: '#E7EBF3',
  },
  verifytext:
  {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: '#EE28A9',
    width: 44,
    height: windowHeight * 0.02528977871,
  },

})