import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";

const Stack = createStackNavigator();


export default function Routes() {
    const userData = useSelector((state) => state.auth.access_token)
    // console.log("user data Route.js", userData)
    const dispatch = useDispatch();
    const data = useSelector((state) => state)
    var AA = data.user.token
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* {!!userData && userData?.access_token ? MainStack(St ack)
                    : AuthStack(Stack)
                } */}
                {AA != '' ? MainStack(Stack)
                    : AuthStack(Stack)
                }
                {/* {MainStack(Stack)}
                {AuthStack(Stack)} */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}








// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import MainStack from './MainStack';
// import AuthStack from './AuthStack';
// import { useSelector, useDispatch } from "react-redux";

// const Stack = createStackNavigator();


// export default function Routes() {
//     const dispatch = useDispatch();
//     const data = useSelector((state) => state)
//     var token = data.user.token
//     console.log('token before login', token)

//     const userData = useSelector((state) => state.auth.userData)

//     // console.log("user data Route.js", userData)

//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 {!!userData && token != '' ? MainStack(Stack)
//                     : AuthStack(Stack)
//                 }


//                 {/* {!!userData && token != '' ? MainStack(Stack)
//                     : AuthStack(Stack)
//                 } */}
//                 {/* {MainStack(Stack)}
//                 {AuthStack(Stack)} */}
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }