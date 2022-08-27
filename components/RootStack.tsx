import React, { FunctionComponent, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Map from '../screens/Map';
import Welcome from '../screens/Welcome';

import AsyncStorage from '@react-native-async-storage/async-storage';

export type RootStackParamList = {
    Home: { location: string } | undefined;
    Map: undefined
    Welcome: undefined
};
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const getData = async () => {
    return await AsyncStorage.getItem('location');
}

const RootStack: FunctionComponent = () => {
    let location;

    getData().then(value => {
        location = value;
    }).catch(e => {
        console.log(e)
    })
    console.log(location)
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
            <Stack.Screen name="Home" component={Home} initialParams={{ location: location }}/>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Map" component={Map}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack