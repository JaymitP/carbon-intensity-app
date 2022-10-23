import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
// import { LineChart as GiftedLineChart } from "react-native-gifted-charts";
import { LineChart as ChartKitLineChart } from "react-native-chart-kit";

interface ItemType {
  value: number;
  date: string;
}

interface LineChartProps {
  chartData: Array<ItemType>;
}

const LineChart = ({ chartData }: LineChartProps) => {
  var labels = chartData.reduce(
    (result, { date }, index) =>
      !index || (index + 1) % 8 == 0
        ? result.push(date.substring(11, date.length - 1)) && result
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
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
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
        height={200}
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
          // style: {
          //   borderRadius: 16,
          // },
          propsForDots: {
            r: "1",
            strokeWidth: "1",
            stroke: "#ffa726",
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
      {/* <GiftedLineChart
        areaChart
        data={chartData.map((item, index) => {
          return {
            value: item.value,
            date: item.date,
            label: item.label,
            labelComponent:
              item.labelComponent ??
              (() => (
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Urbanist",
                    color: "black",
                    width: 20,
                    position: "relative",
                    // left: index != 0 ? (index / 24) * -10 : 0,
                    marginBottom: 10,
                  }}
                >
                  {item.label}
                </Text>
              )),
          };
        })}
        width={width + 10}
        height={140}
        initialSpacing={0}
        noOfSections={4}
        stepHeight={140 / 4}
        maxValue={400}
        // hideDataPoints
        spacing={width / 48}
        color="#94d3ff"
        thickness={2}
        startFillColor="#cfebff"
        endFillColor="#cfebff"
        startOpacity={0.8}
        endOpacity={0.8}
        yAxisTextStyle={{ color: "black", fontSize: 12 }}
        showVerticalLines
        noOfVerticalLines={4}
        verticalLinesColor="black"
        verticalLinesSpacing={75}
        yAxisColor="black"
        xAxisColor="black"

        // horizontalRulesStyle={{ color: "green", fontSize: 4 }}
        pointerConfig={{
          pointerStripColor: "black",
          pointerColor: "lightgray",
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          // activatePointersOnLongPress: true,
          // autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: (items) => {
            return (
              <View
                style={{
                  height: 90,
                  width: 100,
                  justifyContent: "center",
                  // marginTop: -30,
                  // marginLeft: -40,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    marginBottom: 6,
                    textAlign: "center",
                  }}
                >
                  {items[0].date}
                </Text>

                <View
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderRadius: 16,
                    backgroundColor: "white",
                  }}
                >
                  <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                    {items[0].value}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      /> */}
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
