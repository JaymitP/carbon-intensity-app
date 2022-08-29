import React, { ReactNode } from 'react'
import { StyleSheet, StyleProp, ViewStyle, View } from 'react-native'

interface Props {
    children : ReactNode,
    style? : StyleProp<ViewStyle>
}

const Body = (props: Props) => {
  return (
    // Cast to object since spread with generic type is not support, can be avoided through styled components
    <View style={[styles.body,props.style]}>
      {props.children}
    </View>
  )
}

export default Body

const styles = StyleSheet.create({
    body: {
      flex: 1,
      padding: 10,
    },
  });
  