import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import React from "react";
// import "../../global.css";

export default function BotttomTabsLayout() {
  return (


    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }} backBehavior="order" >
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Index',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dice-1-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen name="second"
        options={{
          title: 'second',
          headerShown: false,
          popToTopOnBlur: true,
          tabBarLabel: 'second',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dice-2-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen name="third"
        options={{
          title: "third",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dice-3-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen name="fourth"
        options={{
          title: "fourth",
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: 'tomato',
            color: "white"
          },

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
      <Tabs.Screen
        name="fifth"
        options={{
          title: 'fifth',
          href: null,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dice-5-outline" size={size} color={color} />
          )
        }}

      />
    </Tabs>


  );
}