import { StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions,Image } from 'react-native'
import React, { useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { Icons } from '../assets'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Profilemodal = ({ closeModal, updateImage }) => {
    
    const [ModalVisible, setModalVisible] = useState(true);

    const handleCloseModal = () => {
        setModalVisible(false);
    };
    const choosePhotoFromGalary = () => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          updateImage(image.path); 
          closeModal(); 
        });
        console.log('updateimage==>', updateImage);
      };


  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      updateImage(image.path); 
      closeModal();
    });
  };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={ModalVisible}
            onRequestClose={handleCloseModal}
        >
            <View style={styles.container}>
                <TouchableOpacity style={styles.overlay} onPress={handleCloseModal} />
                <View style={styles.modalView}>
                    <Text style={styles.profiletext}>Profile Photo</Text>
                    <View style={styles.line}/>
                    <View style={styles.row}>
                    <View style={styles.inerrow}>
                        <Image source={Icons.upload} style={styles.img}/>
                        <Text style={styles.text}>Upload from Gallery</Text>
                    </View>
                    <TouchableOpacity onPress={choosePhotoFromGalary}>
                    <Image source={Icons.forward}/>
                    </TouchableOpacity>
                   </View>
                   <View style={styles.row}>
                    <View style={styles.inerrow}>
                        <Image source={Icons.camera} style={styles.img}/>
                        <Text style={styles.text}>Use Camera</Text>
                    </View>
                    <TouchableOpacity onPress={takePhotoFromCamera}>
                    <Image source={Icons.forward}/>
                    </TouchableOpacity>
                   </View>
                   <View style={styles.row}>
                    <View style={styles.inerrow}>
                        <Image source={Icons.avatar} style={styles.img}/>
                        <Text style={styles.text}>Select an Avatar</Text>
                    </View>
                    <TouchableOpacity>
                    <Image source={Icons.forward}/>
                    </TouchableOpacity>
                   </View>
                </View>
                
            </View>
        </Modal>
    )
}

export default Profilemodal;

const styles = StyleSheet.create({

    container:
    {
        flex: 1,

    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        width: windowWidth,
        height: windowHeight * 0.44151738672,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        paddingLeft: windowWidth * 0.05607476635,
        paddingTop: windowHeight * 0.04058823529,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    profiletext:
    {
        fontWeight:'700',
        fontSize:24,
        lineHeight:30.36,
    },
    line:
    {
        width:windowWidth*0.88785046729,
        height:1,
        backgroundColor:'#E6E9F3',
        marginTop:windowHeight*0.02107481559,
        marginBottom:windowHeight*0.02107481559,
    },
    row:
    {
        flexDirection:'row',
        width:windowWidth*0.88785046729,
        height:windowHeight*0.08956796628,
        backgroundColor:'#F6F9FA',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:windowWidth*0.07009345794,
        marginBottom:10,
    },
    text:
    {
        fontSize:16,
        fontWeight:'500',
        marginLeft:windowWidth*0.05607476635,
       
    },
    inerrow:
    {
     flexDirection:'row', 
     alignItems:'center'  
    },
    img:{
        height:windowHeight*0.10392156862,
        width:windowWidth*0.10280373831,
        resizeMode:'contain',
    },
})