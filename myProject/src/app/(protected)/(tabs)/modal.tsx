import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ModalScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ModalScreen</Text>
        </View>
    );
};

export default ModalScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 8
    },
});