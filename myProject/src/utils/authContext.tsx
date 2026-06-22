import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, ReactElement, useEffect, useState } from "react";

type authState = {
    isLoggedIn: boolean,
    logIn: () => void;
    logOut: () => void;
}

export const AuthContext = createContext<authState>({
    isLoggedIn: false,
    logIn: () => { },
    logOut: () => { }
});

const authStorageKey: string = "auth-key";

export const AuthProvider = ({ children }: PropsWithChildren): ReactElement => {
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
            try {
                const value = await AsyncStorage.getItem(authStorageKey);
                if (value !== null) {
                    const auth = JSON.parse(value)
                }
            } catch (error) {
                console.log(`Error fetching from storage ${error}`)
            }
        };
        getAuthFromStorage();
    }, [])
    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}