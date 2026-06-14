import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const LayoutScreenHome = () => {
    return (
        <Stack >
            <Stack.Screen name='index' options={{ title: 'index' }} />
            <Stack.Screen name='home-nested' options={{ title: 'home-nested' }} />
        </Stack>
    )
}

export default LayoutScreenHome