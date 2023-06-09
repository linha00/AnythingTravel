import React, { useState } from 'react';
import { StyleSheet , Text , View, FlatList , ScrollView} from 'react-native';
import color from '../config/colors'

import SelectButton from './selectButton'
import { useNavigation } from '@react-navigation/native';


function Country(props) {
    const [items, setItem] = useState([
        {name: 'Brunei', image:"placeholder"},
        {name: 'Cambodia', image:"placeholder"},
        {name: 'China', image:"placeholder"},
        {name: 'Indonesia', image:"placeholder"},
        {name: 'Japan', image:"placeholder"},
        {name: 'Singapore', image:"placeholder"},
        {name: 'South Korea', image:"placeholder"},
        {name: 'Thailand', image:"placeholder"},
    ]);

    const navigation = useNavigation();

    const goTo = country => () => {
        navigation.navigate(`shop_${country}`);
    };

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

                            <Text style={styles.gold}>
                                {item.gold}
                            </Text>
                        </View>

                        <SelectButton text= "select" onPress={goTo(item.name)} />
                    </View>
                )}/>
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
        width: "93%",
        height: 170,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 5,
        marginBottom: 10,
        borderBottomWidth: 1,
    },

    image: {
        width: 100,
        height: 140,
        backgroundColor: color.gold,
    },

    name: {
        fontSize: 20,
        top: 20,
    },

    gold: {
        fontSize: 15,
        top: 15,
        color: color.gold,
    },

})

export default Country;