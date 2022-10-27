import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { filteredDataItem } from "../../screens/Home";
import InnerContainer from "../InnerContainer";
import { schedulePushNotification } from "../../utils/notifications";
import { notificationContent } from "../../screens/Reminder";
import moment from "moment";

interface ReminderItemProps extends filteredDataItem {
  label: string;
}

const ReminderItem = ({ label, value, date }: ReminderItemProps) => {
  const notification = {
    ...notificationContent,
    content: {
      title: `Reminder: Carbon Intensity is ${label} at ${value} gCO²/kWh`,
      body: `Now would be a good time to ${
        label.toLowerCase() == "high" ? "unplug" : "use"
      } any energy intensive appliances.`,
      data: { date, details: { type: label, intensity: value } },
    },
    trigger: {
      seconds: moment(date).diff(moment(), "seconds"),
    },
  };
  return (
    moment() < moment(date) && (
      <InnerContainer
        style={label.toLowerCase() == "high" ? styles.low : styles.high}
      >
        <View style={styles.intensity}>
          <Text>{value}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.details}>
            <Text style={styles.detailsText}>{label.toUpperCase()}</Text>
            <Text style={styles.detailsText}>{moment(date).format("LT")}</Text>
          </View>
          <Pressable
            style={styles.tickbox}
            onPress={async () => {
              schedulePushNotification(notification);
            }}
          ></Pressable>
        </View>
      </InnerContainer>
    )
  );
};

export default ReminderItem;

const styles = StyleSheet.create({
  high: {
    backgroundColor: "#acdf87",
  },
  low: {
    backgroundColor: "#f7b4bb",
  },
  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details: {
    marginLeft: 10,
  },
  detailsText: {
    fontFamily: "UrbanistBold",
  },
  tickbox: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: "#ffffff",
  },
  intensity: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    // https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
