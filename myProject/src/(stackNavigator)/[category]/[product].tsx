import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const ProductScreen = () => {
    const params = useLocalSearchParams()
    return (
        <View style={styles.container}>
            <Text>{JSON.stringify(params, null, '')}</Text>
        </View>
    );
};

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        // gap: 8
    },
});