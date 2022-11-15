import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LandingPage from '../../screens/LandingPage/LandingPage'
import LoginPage from '../../screens/LoginPage/LoginPage'
import SignUpPage from '../../screens/SignUpPage/SignUpPage'

const MainStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='LandingPage' component={LandingPage} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name='Signup' component={SignUpPage} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack