import React,{ useRef, useState }from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity ,SafeAreaView} from 'react-native';
import Tutorialdata from '../utils/tutorialdata';
import Tutorialitem from '../utils/tutorialitem';
import { ScreenNames } from '../navigator/screenNames';
const Tutorialscreen = ({navigation}) => {
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatlistRef = useRef(null);

    const handleNext = () => {
        if (currentIndex < Tutorialdata.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            flatlistRef.current.scrollToIndex({ index: nextIndex });
        } else {
            navigation.navigate(ScreenNames.SignIn);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Tutorialdata}
                renderItem={({ item }) => <Tutorialitem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                ref={flatlistRef}
                scrollEnabled={false}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>
                        {currentIndex === Tutorialdata.length - 1 ? 'Get Started' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Tutorialscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50, 
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});