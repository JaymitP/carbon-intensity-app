import { Text, View } from "react-native";
import { DonutChartData } from "./DonutChart";

interface LegendLabelProps {
  label: string;
  value: number;
  color: string;
  gradientCenterColor?: any;
}

interface LegendProps {
  data: DonutChartData;
}

const LegendElement = (props: LegendLabelProps): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: 120,
        marginRight: 20,
      }}
    >
      <View
        style={{
          height: 40,
          width: 40,
          borderRadius: 10,
          backgroundColor: props.color,
          marginRight: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 16, color: "white" }}>{props.value}%</Text>
      </View>
      <Text style={{ color: "black" }}>{props.label}</Text>
    </View>
  );
};

const DonutChartLegend = (props: LegendProps): JSX.Element => {
  Object.keys(props.data).map((label) => {
    console.log({ label, ...props.data[label] });
  });
  return (
    <View>
      {Object.keys(props.data).map((key) => (
        <LegendElement {...props.data[key]} label={key} />
      ))}
    </View>
  );
};
export default DonutChartLegend;
