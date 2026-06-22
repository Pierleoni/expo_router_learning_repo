import { AuthContext } from '@/utils/authContext';
import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => {
    const authContext = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <Pressable style={styles.btn} onPress={authContext.logIn}>
                <Text style={styles.txtBnt}>Accedi!</Text>
            </Pressable>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 8
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: '#4F46E5',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        alignItems: 'center',
    },
    txtBnt: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});