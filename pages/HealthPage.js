import {StyleSheet, SafeAreaView, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';

function HealthPage() {
    
    return (
        <SafeAreaView style={styles.container}>
            <Text>Health page</Text>
        </SafeAreaView>
        
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

export default HealthPage;
