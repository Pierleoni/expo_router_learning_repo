import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const fifth = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>fifth</Text>
        </View>
    );
};

export default fifth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 8
    },
    txt: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#155cfc'
    }
});