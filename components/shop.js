import React, { useState } from 'react';
import { StyleSheet , Text , View, FlatList , Dimensions } from 'react-native';
import color from '../config/colors'

import BuyButton from './buyButton';

const windowWidth = Dimensions.get('window').width;
const componentWidth = (windowWidth / 4) - 20;
const componentHeight = componentWidth * 1.5;

function Shop(props) {
    const [items, setItem] = useState([
        {name: 'Package 1', image:"placeholder", price: 1000, key: '1'},
        {name: 'Package 2', image:"placeholder", price: 2500, key: '2'},
        {name: 'Package 3', image:"placeholder", price: 600, key: '3'},
    ]);

    const buy = (name) => {
        console.log('buy ' + name);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({item}) => (
                <View style={styles.box} key={item.key}>
                    <Text style={styles.image}>
                        {item.image}
                    </Text>

                    <View style={styles.text}>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>

                        <Text style={styles.desc}>
                            test
                        </Text>

                        <Text style={styles.price}>
                            ${item.price}
                        </Text>
                    </View>
                    <View style = {styles.buy}>
                    <BuyButton text= "buy" onPress={() => buy("placeholder")} />
                    </View>
                </View>
                )}/>
                <Text> The Following Are The Health Guidelines.</Text>
                <Text> ... </Text>
        </View>        
    ); 
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    box: {
        flexDirection: 'row',
        width: "100%",
        height: componentHeight + 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 5,
        marginBottom: 10,
        borderBottomWidth: 1,
    },

    image: {
        width: componentWidth,
        height: componentHeight,
        backgroundColor: color.gold,
        left: -10,
    },

    text: {
        width: componentWidth + 30,
        top: 15,
    },

    buy: {
        top: 20,
    },

    name: {
        fontSize: 16,
    },

    price: {
        fontSize: 14,
    },

    desc: {
        fontSize: 12,
    },

})

export default Shop;