import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NestedScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Nested Screen</Text>
        </View>
    );
};

export default NestedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        // gap: 8
    },
});