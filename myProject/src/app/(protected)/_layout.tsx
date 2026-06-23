import { AuthContext } from '@/utils/authContext';
import { Redirect, Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
// import "../global.css";

export const unstable_settings = {
    initialRouteName: "(tabs)"
}
// const isLoggedIn: boolean = false;
const ProtectedLayout = () => {
    // if (!isLoggedIn) {
    //     return <Redirect href='/login' />
    // }
    const authState = useContext(AuthContext);
    console.log(`isReady ${authState.isReady}`)
    console.log(`isReady ${authState.isReady}`)
    if (!authState.isReady) {
        return null;
    }
    if (!authState.isLoggedIn) {
        return <Redirect href='/login' />
    }
    return (
        <>
            {/* <StatusBar style='auto' /> */}
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

export default ProtectedLayout;