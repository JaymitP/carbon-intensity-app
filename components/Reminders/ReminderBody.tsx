import moment from "moment";
import React, { ReactNode, useEffect, useState } from "react";
import { StyleSheet, StyleProp, ViewStyle, View, Text } from "react-native";
import { getData24Hours } from "../../utils/API";
import ReminderItem from "./ReminderItem";

interface Props {
  region: string;
  date: string;
  style?: StyleProp<ViewStyle>;
}

const ReminderBody = (props: Props) => {
  const [carbonIntensity, setCarbonIntensity] = useState<Array<any>>(null);
  useEffect(() => {
    getData24Hours(props.region, moment(props.date).toISOString())
      .then((responseJson) => {
        setCarbonIntensity(responseJson.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.date]);

  const filteredData = carbonIntensity?.map((item) => {
    return {
      value: item.intensity.forecast,
      date: new Date(item.to).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      }),
    };
  });
  filteredData?.sort((a, b) => b.value - a.value);

  return (
    carbonIntensity && (
      <View style={[styles.body, props.style]}>
        <ReminderItem label={"High"} {...filteredData[0]} />
        <ReminderItem
          label={"Low"}
          {...filteredData[filteredData.length - 1]}
        />
      </View>
    )
  );
};

export default ReminderBody;

const styles = StyleSheet.create({
  body: {
    padding: 10,
    // backgroundColor: "#000",
  },
});
