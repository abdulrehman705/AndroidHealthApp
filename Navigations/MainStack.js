import React from 'react';
import { StyleSheet } from 'react-native'

import TabRoutes from "./TabRoutes";
import CateogriesScreen from '../Components/CateogriesScreen';
export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="CateogriesScreen"
                component={CateogriesScreen}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="Accounts"
                component={TabRoutes}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ animation: 'slide_from_right' }}
            /> */}

        </>
    )
}

const styles = StyleSheet.create({


    font: {
        fontSize: 35,
        fontStyle: 'bold',
        fontWeight: '500',
        color: "#483d8b",
    },
    icon: {
        color: "#483d8b",
        fontSize: 25,
        padding: 15
    },



})