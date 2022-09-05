import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart as GiftedLineChart } from "react-native-gifted-charts";

const screenWidth = Dimensions.get("window").width;
interface ItemType {
  value: number;
  date: string;
  label?: string;
  labelComponent?: JSX.Element;
}

interface LineChartProps {
  chartData: Array<ItemType>;
}

const LineChart = ({ chartData }: LineChartProps) => {
  const width = screenWidth - 100;
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
        data={chartData}
        width={width}
        height={150}
        initialSpacing={0}
        noOfSections={4}
        stepHeight={150 / 4}
        maxValue={400}
        hideDataPoints
        spacing={width / 48}
        color="#94d3ff"
        thickness={2}
        startFillColor="#cfebff"
        endFillColor="#cfebff"
        startOpacity={0.8}
        endOpacity={0.8}
        rulesColor="black"
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
                    {"$" + items[0].value + ".0"}
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

// const exampleData = [
//   {
//     value: 160,
//     date: "1 Apr 2022",
//     label: "4:00 PM",
//     labelTextStyle: { color: "black", width: 60 },
//     labelComponent: () => <Text style={styles.label}>{"4:00 AM"}</Text>,
//   },
//   { value: 180, date: "2 Apr 2022" },
//   { value: 190, date: "3 Apr 2022" },
//   { value: 180, date: "4 Apr 2022" },
//   { value: 140, date: "5 Apr 2022" },
//   { value: 145, date: "6 Apr 2022" },
//   { value: 160, date: "7 Apr 2022" },
//   { value: 200, date: "8 Apr 2022" },

//   { value: 220, date: "9 Apr 2022" },
//   {
//     value: 240,
//     date: "10 Apr 2022",
//     label: "10:00 PM",
//     labelTextStyle: { width: 80 },
//     labelComponent: () => <Text style={styles.label}>{"10:00 AM"}</Text>,
//   },
//   { value: 280, date: "11 Apr 2022" },
//   { value: 260, date: "12 Apr 2022" },
//   { value: 340, date: "13 Apr 2022" },
//   { value: 385, date: "14 Apr 2022" },
//   { value: 280, date: "15 Apr 2022" },
//   { value: 390, date: "16 Apr 2022" },

//   {
//     value: 370,
//     date: "17 Apr 2022",
//     label: "4:00 AM",
//     labelTextStyle: { width: 100 },
//     labelComponent: () => <Text style={styles.label}>{"4:00 PM"}</Text>,
//   },
//   { value: 285, date: "18 Apr 2022" },
//   { value: 295, date: "19 Apr 2022" },
//   { value: 300, date: "20 Apr 2022" },
//   { value: 280, date: "21 Apr 2022" },
//   { value: 295, date: "22 Apr 2022" },
//   { value: 260, date: "23 Apr 2022" },
//   { value: 255, date: "24 Apr 2022" },

//   {
//     value: 190,
//     date: "25 Apr 2022",
//     label: "10:00 AM",
//     labelTextStyle: { width: 10 },
//     labelComponent: () => <Text style={styles.label}>{"10:00 PM"}</Text>,
//   },
//   { value: 220, date: "26 Apr 2022" },
//   { value: 205, date: "27 Apr 2022" },
//   { value: 230, date: "28 Apr 2022" },
//   { value: 210, date: "29 Apr 2022" },
//   {
//     value: 200,
//     date: "30 Apr 2022",
//     label: "4:00 PM",
//     labelTextStyle: { width: 80 },
//     labelComponent: () => <Text style={styles.label}>{"4:00 AM"}</Text>,
//   },
//   { value: 240, date: "1 May 2022" },
//   { value: 250, date: "2 May 2022" },
//   { value: 280, date: "3 May 2022" },
//   { value: 250, date: "4 May 2022" },
// ];
