import React from 'react';
import { StyleSheet , TouchableOpacity , Text , Image} from 'react-native';
import color from '../config/colors'

const healthButton = ({onPress}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>
                Health Guidelines
            </Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 20,
        color: color.tertiary,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },

})

export default healthButton;