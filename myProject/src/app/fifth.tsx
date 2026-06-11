import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const Fifth = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Fifth Screen</Text>
            <Button title='Push third' onPress={() => router.push('/third')} />
            <Button title='Navigate second' onPress={() => router.navigate('/secondIndex')} />
            <Button title='Replace con fourth' onPress={() => router.replace('/fourthIndex')} />
            <Button title='Back to the Index' onPress={() => router.back()} />

        </View>
    );
};

export default Fifth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 8

    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#d21010f8'
    }
});