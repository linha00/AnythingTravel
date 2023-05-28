import React from 'react';
import { StyleSheet , Text , View, SafeAreaView } from 'react-native';
import color from '../config/colors'

import Shop from '../components/shop';
import BackButton from '../components/backButton';

function ShopPage() {
    return (
        
        <SafeAreaView style={styles.container}>
            <View style = {styles.back}>
                <BackButton/>
            </View>

            <View style={styles.container2}>
                <Text style={styles.header}>
                    Packages
                </Text>

                <View style={styles.shop}>
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
        flex: 14,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },

    back: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    header: {
        fontSize: 35,
        color: color.quaternary,
        paddingTop: 30,
    },

    shop: {
        width: '90%',
        height: '85%',
        backgroundColor: color.primary,
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        margin: 15,
    }

})

export default ShopPage;