import { Stack } from "expo-router";
import "../../global.css";

import React from "react";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            title: 'Home',
            // Questa proprietà allinea l'header della schermata al centro in alto
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name='proverbs/[id]'
          options={({ route }) => ({
            title: 'Proverb ID: ' + route.params?.id,
            animation: "slide_from_bottom",
            headerTitleAlign: 'center'
          })}
        />
      </Stack>
    </>
  );
}