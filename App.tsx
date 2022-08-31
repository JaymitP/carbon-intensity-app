import React from "react";
import { useFonts } from "expo-font";

import RootStack from "./components/RootStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    Urbanist: require("./assets/fonts/Urbanist-Medium.ttf"),
    UrbanistSemiBold: require("./assets/fonts/Urbanist-SemiBold.ttf"),
    UrbanistBold: require("./assets/fonts/Urbanist-Bold.ttf"),
  });
  return <RootStack />;
}
