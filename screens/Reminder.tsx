import * as Notifications from "expo-notifications";
import { Subscription } from "expo-modules-core";

import React, { useEffect, useRef } from "react";
import { RootStackParamList } from "../components/RootStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import MainContainer from "../components/MainContainer";
import NavBar from "../components/NavBar";
import { Agenda } from "react-native-calendars";
import Header from "../components/Header";
import ReminderBody from "../components/Reminders/ReminderBody";
type Props = NativeStackScreenProps<RootStackParamList, "Reminder">;

export const notificationContent = {
  content: {
    title: "Reminder",
    body: "Here is the notification body",
    data: { data: "placeholder" },
  },
  trigger: { seconds: 1 },
};

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

  const [selectedDay, setSelectedDay] = React.useState(
    new Date().toISOString().split("T")[0]
  );
  return (
    <MainContainer>
      <Header title="Reminders" />
      <Agenda
        // Enable the option to swipe between months. Default = false
        // enableSwipeMonths={true}
        hideKnob={true}
        renderEmptyData={() => {
          // return <Text>No reminders for this day</Text>;
          return <ReminderBody region={"HA0"} date={selectedDay} />;
        }}
        loadItemsForMonth={(day) => setSelectedDay(day.dateString)}
        style={{}}
        selected={selectedDay}
        firstDay={1}
      />
      <NavBar active={route.name} />
    </MainContainer>
  );
};

export default Reminder;
