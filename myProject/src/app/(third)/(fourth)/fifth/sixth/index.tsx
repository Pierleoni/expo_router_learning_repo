import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DeeplyNestedScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>DeeplyNestedScreen</Text>
        </View>
    )
}

export default DeeplyNestedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35b91aff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    }
})

// \fifth\sixth