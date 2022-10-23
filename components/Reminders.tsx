import React, { ReactNode } from "react";
import { StyleSheet, StyleProp, ViewStyle, View, Text } from "react-native";

interface Props {
  day: string;
  style?: StyleProp<ViewStyle>;
}

const Reminders = (props: Props) => {
  return (
    <View style={[styles.body, props.style]}>
      <Text>{props.day}</Text>
    </View>
  );
};

export default Reminders;

const styles = StyleSheet.create({
  body: {
    padding: 10,
    // backgroundColor: "#000",
  },
});
