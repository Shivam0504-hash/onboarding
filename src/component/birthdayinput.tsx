import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image,Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Icons } from '../assets'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height


const BirthdayInput = ({ label, value, onChangeDate }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        onChangeDate(date.toLocaleDateString());
        hideDatePicker();
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                label={label}
                value={value}
                editable={false}
                mode="outlined"
                style={styles.input}
                right={
                    <TextInput.Icon
                        icon={() => (
                            <TouchableOpacity onPress={showDatePicker}>
                                <Image source={Icons.callender} style={styles.icon} />
                            </TouchableOpacity>
                        )}
                    />
                }
                outlineColor='#E7EBF3'
                theme={{roundness:30}}
            />
             <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'white',
        height: windowHeight * 0.06322444678,
        
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default BirthdayInput;