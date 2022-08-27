import { View, Text, Button, SafeAreaView  } from 'react-native'
import React, { FunctionComponent } from 'react'

import { RootStackParamList } from '../components/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, "Map">;

const Map: FunctionComponent<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>MapScreen</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  )
}

export default Map