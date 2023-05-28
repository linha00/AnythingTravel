import React, {useState} from 'react';
import {Image, StyleSheet, View, SafeAreaView, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import color from '../config/colors'

import CustomInput from '../components/customInput'
import CustomButton from '../components/customButton'
import TaskBar from '../components/taskBar';

    const press = () => {
        Keyboard.dismiss();
    };

function HomePage() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const {control, handleSubmit, formState: {errors}} = useForm();
    
    return (
        <TouchableWithoutFeedback onPress={press}>
            <SafeAreaView style={styles.container}>
                <Text>Home page</Text>
                <TaskBar/>
            </SafeAreaView>
        </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default HomePage;
