import React from 'react';
import SignUpScreen from '../Components/SignUpScreen';
import LoginScreen from '../Components/LoginScreen';
import HomeScreen from '../Components/HomeScreen';

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Signup"
                component={SignUpScreen}
            options={{ headerShown: false }}
            />

        </>
    )
}