import {SafeAreaView, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'

interface Props {
    children : ReactNode,
    style? : StyleProp<ViewStyle>
}

const MainContainer = (props: Props) => {
  return (
    // Cast to object since spread with generic type is not support, can be avoided through styled components
    <SafeAreaView style={{...styles.container,...(props.style as object)}}>
        {props.children}
    </SafeAreaView>
  )
}

export default MainContainer

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: null,
      height: null,
    },
  });
  