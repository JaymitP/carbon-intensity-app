import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

interface scheduleNotificationType {
  content: {
    title: string;
    body: string;
    data: any;
  };
  trigger: {
    seconds: number;
  };
}

export async function schedulePushNotification(
  notificationContent: scheduleNotificationType
) {
  await Notifications.scheduleNotificationAsync(notificationContent);
  let date = moment(notificationContent.content.data.date);
  let newNotification = {};
  newNotification[date.format("HH:MM:ss")] =
    notificationContent.content.data.details;

  try {
    await AsyncStorage.mergeItem(
      date.format("DD-MM-YYYY"),
      JSON.stringify(newNotification)
    );
    // Implementation using an array of notifications
    // await AsyncStorage.getItem(date.format("DD-MM-YYYY")).then(
    //   async (result) => {
    //     let retrievedData = JSON.parse(result) || [];
    //     let newNotification = {};
    //     newNotification[date.format("HH:MM:ss")] =
    //       notificationContent.content.data.details;

    //     await AsyncStorage.setItem(
    //       date.format("DD-MM-YYYY"),
    //       JSON.stringify(retrievedData.concat([newNotification]))
    //     );
    //   }
    // );
  } catch (e) {
    console.log(e);
  }
}

export function setNotificationHandler() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
}

export async function registerForPushNotificationsAsync() {
  let token;
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notification!");
    return;
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
}
