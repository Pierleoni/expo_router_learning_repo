import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { proverbs } from '../app/(stackNavigator)/proverbs/[id]';

const ProverbList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header} >Lista dei proverbi </Text>
            <FlatList
                data={proverbs}
                keyExtractor={p => p.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardText}>{item.proverb}</Text>
                        <Text style={styles.cardSource}>{item.source}</Text>

                    </View>
                )}
            />
        </View>
    );
};

export default ProverbList;

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
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Per l'ombra su Android
    },
    cardText: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#333',
        marginBottom: 8,
    },
    cardSource: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#666',
        textAlign: 'right',
    }
});