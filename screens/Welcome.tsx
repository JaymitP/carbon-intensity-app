import { View, Text, Button, SafeAreaView  } from 'react-native'
import React, { FunctionComponent } from 'react'

import { RootStackParamList } from '../components/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const setData = async (location: string) => {
  try {
    await AsyncStorage.setItem("location", location)
  } catch (e) {
    console.log(e)
  }
}

const Welcome: FunctionComponent<Props> = ({navigation}) => {
  setData("HA0");
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Welcome</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  )
}

export default Welcome