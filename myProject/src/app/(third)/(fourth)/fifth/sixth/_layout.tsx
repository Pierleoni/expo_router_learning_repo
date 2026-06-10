import React from 'react'
import { Redirect, Slot } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const Layout = () => {
  return <Redirect href= '/secondIndex' />
}

export default Layout
const styles = StyleSheet.create({
container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8e2a2ab8',
    },
    txt: {
      alignItems: 'center',
      fontWeight: 'bold'

    }
})