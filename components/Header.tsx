import React, { ReactNode } from 'react'
import {View, StyleSheet, StyleProp, ViewStyle, Text } from 'react-native'
import '@fontsource/urbanist/500.css'

interface Props {
    title: string,
    style? : StyleProp<ViewStyle>
}

const Header = (props: Props) => {
  return (
    // Cast to object since spread with generic type is not support, can be avoided through styled components
    <View style={[styles.header,props.style]}>
        <Text style={styles.headerText}>{props.title}</Text>
    </View>
  )
}
// https://reactnative.dev/docs/text#limited-style-inheritance
// https://stackoverflow.com/questions/35255645/how-to-set-default-font-family-in-react-native  URBANIST
export default Header

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        padding: 10,
        height: 60,
        alignItems: "center",
        color: '#000',
      },
      headerText: {
        fontWeight: "bold",
        fontSize: 30,
        fontFamily: "Urbanist",
      },
  });
  