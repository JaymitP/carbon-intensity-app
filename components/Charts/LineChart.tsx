import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart as GiftedLineChart } from "react-native-gifted-charts";

interface ItemType {
  value: number;
  date: string;
  label: string | null;
  labelComponent: () => void;
}

interface LineChartProps {
  chartData: Array<ItemType>;
}

const LineChart = ({ chartData }: LineChartProps) => {
  const width = Dimensions.get("window").width * 0.8;
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
      <GiftedLineChart
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
                    width: 40,
                    position: "relative",
                    left: index != 0 ? (index / 24) * -10 : 0,
                    marginBottom: 10,
                  }}
                >
                  {item.label}
                </Text>
              )),
          };
        })}
        width={width}
        height={140}
        initialSpacing={0}
        noOfSections={4}
        stepHeight={140 / 4}
        maxValue={400}
        hideDataPoints
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
        horizontalRulesStyle={{ color: "green", fontSize: 4 }}
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
