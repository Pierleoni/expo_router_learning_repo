import { Stack, usePathname } from "expo-router";

export default function StackLayout() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <Stack screenOptions={
            { animation: pathname.startsWith('/second') ? 'default' : 'none' }
        }>
            <Stack.Screen name="index" options={{ title: 'index' }} />
            <Stack.Screen name="nested" options={{ title: 'nested' }} />
            <Stack.Screen name="also-nested" options={{ title: 'also-nested' }} />
        </Stack>
    )
}