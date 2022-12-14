import { View, Text, ScrollView } from "react-native";
import React from "react";
import ReminderItem from "../Reminders/ReminderItem";
import { filteredDataItem } from "../../screens/Home";
interface ForecastProps {
  data: Array<filteredDataItem>;
}

const Forecast = (props: ForecastProps) => {
  // clone the data
  const carbonIntensityData = props.data.slice();
  carbonIntensityData.sort((a, b) => b.value - a.value);
  //   const highestCI = props.data.indexOf(carbonIntensityData[0]);
  //   const lowestCI = props.data.indexOf(
  //     carbonIntensityData[carbonIntensityData.length - 1]
  //   );
  return (
    <ScrollView>
      <ReminderItem label={"High"} {...carbonIntensityData[0]} />
      <ReminderItem
        label={"Low"}
        {...carbonIntensityData[carbonIntensityData.length - 1]}
      />
    </ScrollView>
  );
};

export default Forecast;
