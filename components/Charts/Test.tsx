import { View, Text } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  color: (opacity = 1) => `red`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 1,
  useShadowColorFromDataset: false, // optional
};
const test = ({ carbonIntensity24Hours }) => {
  const data = {
    labels: carbonIntensity24Hours.map((item, index) =>
      !(index % 12) ? item.to.substring(0, 10) : ""
    ),
    datasets: [
      {
        data: carbonIntensity24Hours.map((item) => item.intensity.forecast),
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        color: () => "blue",
        strokeWidth: 1, // optional
      },
    ],
  };
  return (
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      bezier
    />
  );
};

export default test;
