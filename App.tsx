import { useEffect } from "react";
import { useFonts } from "expo-font";

import RootStack from "./components/RootStack";
import {
  registerForPushNotificationsAsync,
  setNotificationHandler,
} from "./utils/notifications";

export default function App() {
  useEffect(() => {
    setNotificationHandler();
    registerForPushNotificationsAsync().catch((err) => console.log(err));
  }, []);

  const [fontsLoaded] = useFonts({
    Urbanist: require("./assets/fonts/Urbanist-Medium.ttf"),
    UrbanistSemiBold: require("./assets/fonts/Urbanist-SemiBold.ttf"),
    UrbanistBold: require("./assets/fonts/Urbanist-Bold.ttf"),
  });
  return <RootStack />;
}
