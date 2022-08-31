import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

interface DonutChartData {
  [k: string]: {
    value: number;
    color: any;
    gradientCenterColor: string;
  };
}

const FUEL_CATEGORIES = ["renewable", "nuclear", "fossil fuels", "other"];

const FUEL_COLOUR_MAP = {
  renewable: "#1196E0",
  nuclear: "#125BB0",
  "fossil fuels": "#042375",
  other: "#01174F",
};

const FUEL_TYPE_MAP = [
  ["renewable", ["hydro", "wind", "solar", "biomass"]],
  ["nuclear", ["nuclear"]],
  ["fossil fuels", ["coal", "gas"]],
  ["other", ["other", "imports"]],
].reduce((obj, [value, keys]) => {
  for (const key of keys) obj[key] = value;
  return obj;
}, {});

const formatData = (
  data: Array<{ fuel: number; perc: number }>
): DonutChartData => {
  const pieData = Object.fromEntries(
    FUEL_CATEGORIES.map((key) => [
      key,
      { value: 0, color: FUEL_COLOUR_MAP[key], gradientCenterColor: "black" },
    ])
  );
  for (const { fuel, perc } of data) {
    pieData[FUEL_TYPE_MAP[fuel]].value += perc;
  }
  return pieData;
};

interface DonutChartProps {
  centerText: string;
  data: Array<{ fuel: number; perc: number }>;
}

const DonutChart = (props: DonutChartProps) => {
  const pieData = Object.values(formatData(props.data));

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <PieChart
        data={pieData}
        donut
        showGradient
        radius={90}
        innerRadius={60}
        innerCircleColor={"#CA4141"} // set colour
        centerLabelComponent={() => {
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{ fontSize: 30, color: "black", fontWeight: "bold" }}
              >
                {props.centerText}g
              </Text>
              <Text style={{ fontSize: 14, color: "black" }}>Excellent</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default DonutChart;
