import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import NavBarItem from "./NavBarItem";

import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "./RootStack";

import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";

interface Props {
  active: String;
  style?: StyleProp<ViewStyle>;
}

const NavBar = (props: Props) => {
  const navigator = useNavigation<StackNavigation>();

  return (
    // Cast to object since spread with generic type is not support, can be avoided through styled components
    <View style={[styles.footer, props.style]}>
      <NavBarItem
        label="Reminders"
        screen="Reminder"
        IconType={MaterialIcons}
        icon="alarm"
        active={props.active == "Reminder"}
      />
      <NavBarItem
        label="Home"
        screen="Home"
        IconType={Octicons}
        icon="home"
        active={props.active == "Home"}
      />
      <NavBarItem
        label="Map"
        screen="Map"
        IconType={MaterialIcons}
        icon="map-marker-outline"
        active={props.active == "Map"}
      />
    </View>
  );
};

export default NavBar;

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
