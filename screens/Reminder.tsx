import { Text } from 'react-native'
import React from 'react'

import { RootStackParamList } from '../components/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import MainContainer from '../components/MainContainer';
import NavBar from '../components/NavBar';
type Props = NativeStackScreenProps<RootStackParamList, "Reminder">;

const Reminder = ({ navigation, route }: Props) => {
  return (
    <MainContainer>
      <Text>Reminder</Text>
      <NavBar active={route.name}/>
    </MainContainer>
  )
}

export default Reminder
