import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, AllTransactions, Income, Others } from '../index';

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName="Home"
        >
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Income" component={Income} />
            <BottomTab.Screen name="Others" component={Others} />

        </BottomTab.Navigator>

    )
}

export default TabRoutes