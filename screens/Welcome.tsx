import { View, Text, Button, SafeAreaView, TextInput  } from 'react-native'
import React, {  useState } from 'react'

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

const Welcome = ({ navigation }: Props) => {
  const [location, setLocation] = useState<string>("")
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Enter postcode</Text>
      <TextInput
        value={location}
        onChangeText={setLocation}
      />
      <Button title="Home" onPress={() => {setData(location); navigation.navigate('Home', { location: location })}} />
    </SafeAreaView>
  )
}

export default Welcome