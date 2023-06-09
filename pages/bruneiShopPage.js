import React from 'react';
import { StyleSheet , Text , View, SafeAreaView } from 'react-native';
import color from '../config/colors'

import BackButton from '../components/backButton';
import { useNavigation } from '@react-navigation/native';
import Shop from '../components/shop';

function BruneiShopPage() {
    const navigation = useNavigation();

    const back = () => {
        navigation.goBack();
    };

    return (
        
        <SafeAreaView style={styles.container}>
            <View style = {styles.back}>
                <BackButton onPress={back}/>
            </View>

            <View style={styles.container2}>
                <Text style={styles.header}>
                    Brunei
                </Text>

                <View style={styles.choice}>
                    <Shop/>
                </View>
            </View>

        </SafeAreaView>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    container2: {
        flex: 9,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        top: 10,
    },

    back: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    header: {
        fontSize: 35,
        color: color.quaternary,
    },

    choice: {
        width: '90%',
        height: '85%',
        backgroundColor: color.primary,
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        margin: 15,
    }

})

export default BruneiShopPage;