import * as Notifications from "expo-notifications";
import { Subscription } from "expo-modules-core";
import { schedulePushNotification } from "../utils/notifications";

import { useEffect, useRef } from "react";
import { Button, Text } from "react-native";
import { RootStackParamList } from "../components/RootStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import MainContainer from "../components/MainContainer";
import NavBar from "../components/NavBar";
type Props = NativeStackScreenProps<RootStackParamList, "Reminder">;

const Reminder = ({ route }: Props) => {
  const responseListener = useRef<Subscription>();

  useEffect(() => {
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const notificationContent = {
    content: {
      title: "Reminder",
      body: "Here is the notification body",
      data: { data: "placeholder" },
    },
    trigger: { seconds: 1 },
  };

  return (
    <MainContainer>
      <Text>Reminder</Text>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          schedulePushNotification(notificationContent);
        }}
      />
      <NavBar active={route.name} />
    </MainContainer>
  );
};

export default Reminder;
