import { Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import DonutChartLegend from "./DonutChartLegend";

export interface DonutChartData {
  [k: string]: {
    value: number;
    color: string;
    gradientCenterColor: string;
  };
}

interface DonutChartProps {
  centerText: string;
  index: string;
  data: Array<{ fuel: number; perc: number }>;
}

// const INTENSITY_COLOUR_MAP = {
const FUEL_CATEGORIES = ["renewable", "nuclear", "fossil fuels", "other"];

const INTENSITY_COLOUR_MAP = {
  low: "#68cfae",
  "very low": "#b0f3be",
  moderate: "#ffeb93",
  high: "#feb679",
  "very high": "#ee6e6e",
};

const FUEL_COLOUR_MAP = {
  renewable: ["#1196E0", "#0063AD"],
  nuclear: ["#125BB0", "#00287D"],
  "fossil fuels": ["#042375", "#000042"],
  other: ["#01174F", "#00001C"],
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
      {
        value: 0,
        color: FUEL_COLOUR_MAP[key][0],
        gradientCenterColor: FUEL_COLOUR_MAP[key][1],
      },
    ])
  );
  for (const { fuel, perc } of data) {
    pieData[FUEL_TYPE_MAP[fuel]].value += perc;
  }
  return pieData;
};

const DonutChart = (props: DonutChartProps) => {
  const formattedData = formatData(props.data);
  const pieData = Object.values(formattedData);

  return (
    <View style={{ flexDirection: "row" }}>
      <PieChart
        data={pieData}
        donut
        showGradient
        radius={80}
        innerRadius={60}
        innerCircleColor={INTENSITY_COLOUR_MAP[props.index]} // set colour
        centerLabelComponent={() => {
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{ fontSize: 30, color: "black", fontWeight: "bold" }}
              >
                {props.centerText}g
              </Text>
              <Text style={{ fontSize: 14, color: "black" }}>
                {props.index}
              </Text>
            </View>
          );
        }}
      />
      <DonutChartLegend data={formattedData} />
    </View>
  );
};
export default DonutChart;
