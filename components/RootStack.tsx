import React, { FunctionComponent, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Map from '../screens/Map';
import Reminder from '../screens/Reminder';
import Welcome from '../screens/Welcome';

import AsyncStorage from '@react-native-async-storage/async-storage';

export type RootStackParamList = {
    Home: { location: string } | undefined;
    Map: undefined
    Reminder: undefined
    Welcome: undefined
};
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const getData = async () => {
    return await AsyncStorage.getItem('location');
    
}

const RootStack: FunctionComponent = () => {
    const [location, setLocation] = React.useState<string>();

    useEffect(() => {
        getData().then(location => {
            console.log("resolved",location)
            setLocation(location);
        }).catch(e => {
            console.log(e);
        })
    } , []);

    return (location!==undefined && 
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={location ? "Home" : "Welcome"}>
            <Stack.Screen name="Home" component={Home} initialParams={{ location: location }}/>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Reminder" component={Reminder}/>
            <Stack.Screen name="Map" component={Map}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack