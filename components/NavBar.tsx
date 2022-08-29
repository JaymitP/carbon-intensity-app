import {View, StyleSheet, StyleProp, ViewStyle, GestureResponderEvent, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'

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
    <View style={[styles.footer,props.style]}>
        <TouchableOpacity onPress={(event: GestureResponderEvent) => navigator.navigate("Reminder")}>
            <MaterialIcons name="alarm" size={25} color={props.active === "Reminder" ? "blue" : ""} />
        </TouchableOpacity>
        <TouchableOpacity onPress={(event: GestureResponderEvent) => navigator.navigate("Home")}>
            <Octicons name="home" size={25} color={props.active === "Home" ? "blue" : ""} />
        </TouchableOpacity>
        <TouchableOpacity onPress={(event: GestureResponderEvent) => navigator.navigate("Map")}>
            <MaterialIcons name="map-marker-outline" size={25} color={props.active === "Map" ? "blue" : ""} />
        </TouchableOpacity>

    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
    footer: {
        height: 50,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 70,
        alignItems: 'center',
        marginTop: "auto"
    },
  });
  