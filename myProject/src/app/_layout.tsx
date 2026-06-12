import { Tabs } from "expo-router";
import "../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }} >
        <Tabs.Screen name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dice-1-outline" size={size} color={color} />
            )
          }}
        />
        <Tabs.Screen name="second"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dice-2-outline" size={size} color={color} />
            )
          }}
        />
        <Tabs.Screen name="third"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dice-3-outline" size={size} color={color} />
            )
          }}
        />
        <Tabs.Screen name="fourth"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dice-4-outline" size={size} color={color} />
            )
          }}
        />
        {/* Questa rotta esiste, ci puoi navigare, ma NON appare nella barra in basso! */}
        <Tabs.Screen
          name="(stackNavigator)"
          options={{
            href: null // questo significa che questa tab non punta alla cartella di raggrupamento
            , headerShown: false   // inoltre il nome o header è nascosto 
          }}
        />
      </Tabs>

    </>
  );
}