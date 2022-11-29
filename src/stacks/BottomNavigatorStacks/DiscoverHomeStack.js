import React from 'react'
import DiscoverPage from '../../screens/DiscoverPage/DiscoverPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const DiscoverHomeStack = () => {


    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='DiscoverPage' component={DiscoverPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default DiscoverHomeStack
