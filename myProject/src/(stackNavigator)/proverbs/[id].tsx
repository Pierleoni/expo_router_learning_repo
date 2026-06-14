import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';

type Proverb = {
    id: string;
    proverb: string;
    source: string;
};

export const proverbs: Proverb[] = [
    { id: "1", proverb: "Il momento migliore per piantare un albero era 20 anni fa. Il secondo momento migliore è adesso.", source: "Proverbio Cinese" },
    { id: "2", proverb: "Non importa quanto vai piano, l'importante è non fermarsi.", source: "Confucio" },
    { id: "3", proverb: "Il successo non è definitivo, il fallimento non è fatale: ciò che conta è il coraggio di andare avanti.", source: "Winston Churchill" },
    { id: "4", proverb: "Credi di potercela fare e sarai già a metà strada.", source: "Theodore Roosevelt" },
    { id: "5", proverb: "L'unico modo per fare un ottimo lavoro è amare quello che fai.", source: "Steve Jobs" },
    { id: "6", proverb: "Sii il cambiamento che vuoi vedere nel mondo.", source: "Mahatma Gandhi" },
    { id: "7", proverb: "Non hai bisogno di vedere l'intera scalinata, inizia semplicemente a salire il primo gradino.", source: "Martin Luther King Jr." },
    { id: "8", proverb: "La logica ti porterà da A a B. L'immaginazione ti porterà dappertutto.", source: "Albert Einstein" },
    { id: "9", proverb: "Il tuo tempo è limitato, quindi non sprecarlo vivendo la vita di qualcun altro.", source: "Steve Jobs" },
    { id: "10", proverb: "Cadi sette volte, rialzati otto.", source: "Proverbio Giapponese" }
];

const ProverbsScreen = () => {
    const params = useLocalSearchParams<{ id: string }>();
    const proverb = proverbs.find(p => p.id === params.id)
    if (!proverb) {
        return (
            <View style={styles.container}>

                <Text style={styles.txtError}  >Error: Not Found</Text>
            </View>
        )
    }
    return (
        <>

            <View style={styles.container}>
                <Stack.Screen options={{ title: proverb.source }} />
                <Text style={styles.header}>"{proverb.proverb}"</Text>
                <Text>- {proverb.source}</Text>
            </View>

        </>
    );
};

export default ProverbsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        // gap: 8
    },
    header: {
        fontSize: 24,
        color: '#d21818ff'
    },
    txtError: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'rgba(223, 32, 14, 1)'
    },

});