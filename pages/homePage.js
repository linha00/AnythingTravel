import React from 'react';
import { StyleSheet , Text , View, SafeAreaView } from 'react-native';
import color from '../config/colors'

import Country from 'C:\Users\gekshan\OneDrive - National University of Singapore\Desktop\AnythingTravel\components\Country.js';

function HomePage() {
    return (
        
        <SafeAreaView style={styles.container}>

            <View style={styles.container2}>
                <Text style={styles.header}>
                    Countries
                </Text>

                <View style={styles.Country}>
                    <Country/>
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
    },

    container1: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        backgroundColor: color.secondary,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingLeft: 30,
        paddingRight: 50,
        paddingBottom: 20,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },

    container2: {
        flex: 6,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
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

export default HomePage;
