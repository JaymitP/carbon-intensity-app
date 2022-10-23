import React, { ReactNode } from "react";
import { View, StyleSheet, StyleProp, ViewStyle, Text } from "react-native";

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
}

const Header = (props: Props) => {
  return (
    // Cast to object since spread with generic type is not support, can be avoided through styled components
    <View style={[styles.header]}>
      <Text style={[styles.headerText, props.style]}>
        {props.title.toUpperCase()}
      </Text>
    </View>
  );
};
// https://reactnative.dev/docs/text#limited-style-inheritance
// https://stackoverflow.com/questions/35255645/how-to-set-default-font-family-in-react-native  URBANIST
export default Header;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    padding: 10,
    height: 60,
    alignItems: "center",
    color: "#000",
  },
  headerText: {
    fontSize: 30,
    fontFamily: "UrbanistBold",
  },
});
