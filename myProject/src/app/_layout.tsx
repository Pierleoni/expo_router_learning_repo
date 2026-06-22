import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import "../global.css";
import { AuthProvider } from '@/utils/authContext';

const RootLayout = () => {
    return (
        <AuthProvider>
            <StatusBar style='auto' />
            <Stack>
                <Stack.Screen name='(protected)' options={{ headerShown: false }} />
            </Stack>
        </AuthProvider>
    );
};

export default RootLayout;