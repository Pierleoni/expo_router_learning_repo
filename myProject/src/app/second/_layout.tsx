import { Stack } from "expo-router";

export default function StackLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'index' }} />
            <Stack.Screen name="nested" options={{ title: 'nested' }} />
            <Stack.Screen name="also-nested" options={{ title: 'also-nested' }} />
        </Stack>
    )
}