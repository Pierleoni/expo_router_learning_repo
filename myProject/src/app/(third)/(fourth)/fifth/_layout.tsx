import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const Layout = () => {
    return <Slot/>
    // return (
    //     <View style = {styles.container} >
    //         {/* <Slot/> */}
    //         <View>

    //             <Text>Stopped by the intermediate layout</Text>
    //         </View>
    //     </View>
    // )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0e23c4f6',
    },
})