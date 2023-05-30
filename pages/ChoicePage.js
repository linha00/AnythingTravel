import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import color from '../config/colors'

import HealthPage from '../pages/HealthPage';
import Shop from '../components/shop'; 
import { useNavigation } from '@react-navigation/native';
import HealthButton from '../components/healthButton';
import ShopButton from '../components/shopButton';

function ChoicePage() {
    const navigation = useNavigation();    
/*
    const goTo = country => () => {
        navigation.navigate(`shop_${country}`);

    const healthb = () => {
        navigation.navigate('HealthPage');
    }

    const shopb = () => {
        navigation.navigate('shop');
    }
*/
    return (
        <SafeAreaView>
            <View style = {styles.button}>
                <HealthButton onPress={navigation.navigate(HealthPage)}/>
                
            </View>

            <View style = {styles.button}>
                <ShopButton onPress={navigation.navigate(Shop)}/>
            </View>

        </SafeAreaView>
    ); 
}

const styles = StyleSheet.create({

    button: {
        width: '50%',
        height: '40%',
        backgroundColor: color.secondary,
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        margin: 15,
        marginTop: 30,
        marginLeft: 80
    },
})

export default ChoicePage;