import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import "../global.css";

export const unstable_settings = {
    initialRouteName: "(tabs)"
}
const RootLayout = () => {
    return (
        <>
            <StatusBar style='auto' />
            <Stack>
                <Stack.Screen
                    name='(tabs)'
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name='modal'
                    options={{
                        presentation: 'modal'
                    }} />
                <Stack.Screen
                    name='model-with-stack'
                    options={{
                        presentation: 'modal',
                        headerShown: false
                    }} />
            </Stack>
        </>
    )

}

export default RootLayout;