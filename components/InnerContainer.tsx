import { View, StyleProp, ViewStyle, StyleSheet, Text } from "react-native";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
const InnerContainer = (props: Props) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default InnerContainer;

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    backgroundColor: "#F8F8F8",
    padding: 5,
    borderRadius: 10,
    flexDirection: "row",
  },
});
