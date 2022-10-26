import { Text, Button } from "react-native";
import React from "react";
import { filteredDataItem } from "../../screens/Home";
import InnerContainer from "../InnerContainer";
import { schedulePushNotification } from "../../utils/notifications";
import { notificationContent } from "../../screens/Reminder";

interface ReminderItemProps extends filteredDataItem {
  label: string;
}

const ReminderItem = ({ label, value, date }: ReminderItemProps) => {
  return (
    <InnerContainer>
      <Text>
        {label}
        {value}
        {date}
      </Text>
      <Button
        title="Schedule"
        onPress={async () => {
          schedulePushNotification(notificationContent);
        }}
      />
    </InnerContainer>
  );
};

export default ReminderItem;
