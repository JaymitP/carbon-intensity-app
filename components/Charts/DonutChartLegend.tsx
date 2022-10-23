import { Text, View } from "react-native";
import { DonutChartData } from "./DonutChart";
import percentRound from "percent-round";

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
        marginBottom: 5,
      }}
      key={props.label}
    >
      <View
        style={{
          height: 35,
          width: 35,
          borderRadius: 10,
          backgroundColor: props.color,
          marginRight: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 14, color: "white" }}>{props.value}%</Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          color: "#424242",
          fontFamily: "UrbanistSemiBold",
          textTransform: "capitalize",
        }}
      >
        {props.label}
      </Text>
    </View>
  );
};

const DonutChartLegend = (props: LegendProps): JSX.Element => {
  // for each key in the data object, return the value and the label to an array
  const legendPercentage = percentRound(
    Object.values(props.data).map((fuel) => fuel.value)
  );

  return (
    <View
      style={{
        padding: 10,
        marginLeft: 30,
        justifyContent: "center",
      }}
    >
      {Object.keys(props.data).map((key, index) => {
        return (
          <>
            {legendPercentage[index] != 0 && (
              <LegendElement
                {...{ ...props.data[key], value: legendPercentage[index] }}
                label={key}
                key={key}
              />
            )}
          </>
        );
      })}
    </View>
  );
};
export default DonutChartLegend;

// let perc = props.data[key].value;
// let newPerc = 0;
// if ( (perc - Math.floor(perc)> roundingError) && roundingError!=0) {
//   console.log(perc);
//   newPerc = Math.floor(perc);
// } else {
//   console.log("Round", perc);
//   newPerc = Math.round(perc);
// }
// roundingError += newPerc - perc;
// console.log(roundingError);
