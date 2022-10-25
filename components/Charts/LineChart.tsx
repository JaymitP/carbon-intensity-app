import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
// import { LineChart as GiftedLineChart } from "react-native-gifted-charts";
import { LineChart as ChartKitLineChart } from "react-native-chart-kit";
import { filteredDataItem } from "../../screens/Home";

interface LineChartProps {
  chartData: Array<filteredDataItem>;
}

const LineChart = ({ chartData }: LineChartProps) => {
  var labels = chartData.reduce(
    (result, { date }, index) =>
      !index || (index + 1) % 8 == 0
        ? result.push(date.substring(0, date.length - 3)) && result
        : result,
    []
  );
  labels = labels.map((label, i) => (i % 3 == 0 ? label : ""));
  const width = Dimensions.get("window").width * 0.9;
  const data = {
    labels: labels,
    // labels: chartData.map(({ date }, index) => {
    //   if (index % 24 == 0) return date.substring(11, date.length - 1);
    // }),

    datasets: [
      {
        data: chartData.map(({ value }) => value),
        color: (opacity = 1) => `#89cefa`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <View
      style={
        {
          // paddingVertical: 50,
          // backgroundColor: "#1C1C1C",
        }
      }
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          fontFamily: "UrbanistBold",
          marginBottom: 10,
        }}
      >
        Carbon Intensity forecast
      </Text>
      <ChartKitLineChart
        data={data}
        width={width}
        height={180}
        segments={4}
        yAxisInterval={12}
        xLabelsOffset={-10}
        onDataPointClick={({ value, getColor }) => console.log(value)}
        chartConfig={{
          propsForVerticalLabels: {
            fontSize: 12,
            translateX: 20,
          },
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          fillShadowGradientFrom: "#cfebff",
          fillShadowGradientFromOpacity: 0.8,
          fillShadowGradientTo: "#cfebff",
          fillShadowGradientToOpacity: 0.9,
          // style: {
          //   borderRadius: 16,
          // },
          propsForDots: {
            r: "1",
            strokeWidth: "0",
            stroke: "#89cefa",
          },
        }}
        // withDots={false}
        bezier
        // decorator={() => <View />}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default LineChart;

const styles = StyleSheet.create({
  label: {
    width: 200,
    position: "absolute",
  },
});
