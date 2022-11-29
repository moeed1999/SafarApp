import { View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoverHomeStack from './DiscoverHomeStack';
import Icon from 'react-native-vector-icons/AntDesign';


const MainBottomStack = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="DiscoverHome" component={DiscoverHomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View >
                            <Icon name="home" color={focused ? '#11799a' : '#3A6EAF'} size={20} />
                        </View>
                    ),
                    headerShown: false,
                    tabBarShowLabel: false

                }}
            />
            <Tab.Screen name="Explore" component={DiscoverHomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View >
                            <Icon name="search1" color={focused ? '#11799a' : '#3A6EAF'} size={20} />
                        </View>
                    ),
                    headerShown: false,
                    tabBarShowLabel: false

                }}
            />
            <Tab.Screen name="Notifications" component={DiscoverHomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View >
                            <Icon name="bells" color={focused ? '#11799a' : '#3A6EAF'} size={20} />
                        </View>
                    ),
                    headerShown: false,
                    tabBarShowLabel: false

                }}
            />
            <Tab.Screen name="profile" component={DiscoverHomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View >
                            <Icon name="user" color={focused ? '#11799a' : '#3A6EAF'} size={20} />
                        </View>
                    ),
                    headerShown: false,
                    tabBarShowLabel: false

                }}
            />


        </Tab.Navigator>
    )
}

export default MainBottomStack
