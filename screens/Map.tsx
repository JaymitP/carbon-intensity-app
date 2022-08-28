import { View, Text, Button, SafeAreaView  } from 'react-native'
import React from 'react'

import { RootStackParamList } from '../components/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import MainContainer from '../components/MainContainer';
import NavBar from '../components/NavBar';
type Props = NativeStackScreenProps<RootStackParamList, "Map">;

const Map = ({ navigation, route }: Props) => {
  return (
    <MainContainer>
      <Text>MapScreen</Text>
      <NavBar active={route.name}/>
    </MainContainer>
  )
}

export default Map