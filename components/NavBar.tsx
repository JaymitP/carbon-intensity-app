import {View, StyleSheet, StyleProp, ViewStyle, GestureResponderEvent, TouchableHighlight } from 'react-native'
import React, { ReactNode } from 'react'

import {RiAlarmLine} from 'react-icons/ri'
import {GrHomeRounded} from 'react-icons/gr'
import {RiMapPinLine} from 'react-icons/ri'
import { useNavigation } from '@react-navigation/native'
import { StackNavigation } from './RootStack'

interface Props {
    active : ReactNode,
    style? : StyleProp<ViewStyle>
}

const NavBar = (props: Props) => {
    const navigator = useNavigation<StackNavigation>()

  return (
    // Cast to object since spread with generic type is not support, can be avoided through styled components
    <View style={{...styles.footer,...(props.style as object)}}>
        <TouchableHighlight onPress={(event: GestureResponderEvent) => navigator.navigate("Reminder")}>
            <RiAlarmLine/>
        </TouchableHighlight>
        <TouchableHighlight onPress={(event: GestureResponderEvent) => navigator.navigate("Home")}>
            <GrHomeRounded/>
        </TouchableHighlight>
        <TouchableHighlight onPress={(event: GestureResponderEvent) => navigator.navigate("Map")}>
            <RiMapPinLine/>
        </TouchableHighlight>

    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    footer: {
        height: 50,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 80,
        alignItems: 'center',
        marginTop: "auto"
    },
  });
  