import AsyncStorage from '@react-native-async-storage/async-storage';
import { SplashScreen, useRouter } from "expo-router";
import { createContext, PropsWithChildren, ReactElement, useEffect, useState } from "react";


SplashScreen.preventAutoHideAsync()
type authState = {
    isLoggedIn: boolean,
    isReady: boolean,
    logIn: () => void;
    logOut: () => void;
}

export const AuthContext = createContext<authState>({
    isLoggedIn: false,
    isReady: false,
    logIn: () => { },
    logOut: () => { }
});

const authStorageKey: string = "auth-key";

export const AuthProvider = ({ children }: PropsWithChildren): ReactElement => {
    const [isReady, setIsReady] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const router = useRouter()
    const storeAuthState = async (newState: { isLogged: boolean }) => {
        try {
            const jsonValue = JSON.stringify(newState);
            await AsyncStorage.setItem(authStorageKey, jsonValue);
        } catch (error) {
            console.log(`Error saving: ${error}`);
        }
    }
    const logIn = () => {
        setIsLoggedIn(true);
        console.log(isLoggedIn)
        storeAuthState({ isLogged: true })
        router.replace("/")
    };
    const logOut = () => {
        setIsLoggedIn(false)
        console.log(isLoggedIn)
        storeAuthState({ isLogged: false })
        router.replace("/login")
    };

    useEffect(() => {
        const getAuthFromStorage = async () => {
            await new Promise((res) => setTimeout(() => res(null), 1000))
            try {
                const value = await AsyncStorage.getItem(authStorageKey);
                if (value !== null) {
                    const auth = JSON.parse(value)
                    setIsLoggedIn(auth.isLogged)
                }
            } catch (error) {
                console.log(`Error fetching from storage ${error}`)
            }
            setIsReady(true)
        };
        getAuthFromStorage();
    }, [])
    useEffect(() => {
        if (isReady) {
            SplashScreen.hideAsync();
        }
    }, [isReady])
    return (
        <AuthContext.Provider value={{ isLoggedIn, isReady, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}