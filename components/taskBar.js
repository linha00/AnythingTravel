import React from 'react';
import { StyleSheet , View, TouchableOpacity , Text , Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import color from '../config/colors'

const TaskBar = () => {
    const navigation = useNavigation();
    
    const home = () => {
        navigation.goBack();
        navigation.navigate('Home');
    }
    const health = () => {
        navigation.goBack();
        navigation.navigate('Health');
    }
    const shop = () => {
        navigation.goBack();
        navigation.navigate('Shop');
    }
    return (
        <View style={styles.container}> 
            <TouchableOpacity onPress={home} style={styles.task}> 
                <Image style={styles.logo} source={require('../assets/home.png')}/>
                <Text style={styles.text}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={shop} style={styles.task}> 
                <Image style={styles.logo} source={require('../assets/shop.png')}/>
                <Text style={styles.text}>Shop</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={health} style={styles.task}> 
                <Image style={styles.logo} source={require('../assets/friends.png')}/>
                <Text style={styles.text}>Health</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderTopWidth: 1,
        paddingHorizontal: 2,
    },

    task: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        backgroundColor: color.primary,
        justifyContent: 'center',
    },

    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    logo: {
        width: 30,
        height: 30,
    },

})

export default TaskBar;