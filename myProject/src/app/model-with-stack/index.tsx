import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const ModalWithStack = () => {
    return (
        <View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', gap: 23, color: '#c51313ff' }}>ModalWithStack</Text>
            <Link href='/modal' push asChild >
                <Button title='Push to /modal-with-stack' />
            </Link>
        </View>
    )
}

export default ModalWithStack