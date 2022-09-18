import {
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
  Text,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "./RootStack";
import { ComponentType } from "react";

interface IconProps {
  name: string;
  size: 10 | 25 | 50;
  color: string;
}

interface Props {
  label?: string;
  screen: "Reminder" | "Home" | "Map";
  IconType: ComponentType<IconProps>;
  icon: string;
  active?: boolean;
}

const NavBarItem = (props: Props) => {
  const navigator = useNavigation<StackNavigation>();

  return (
    <TouchableOpacity
      onPress={(e: GestureResponderEvent) => navigator.navigate(props.screen)}
      style={{ flexDirection: "column", alignItems: "center" }}
    >
      <props.IconType
        name={props.icon}
        size={25}
        color={props.active ? "blue" : ""}
      />
    </TouchableOpacity>
  );
};

export default NavBarItem;

const styles = StyleSheet.create({
  footer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 70,
    alignItems: "center",
    marginTop: "auto",
  },
});
