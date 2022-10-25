import { View, Text } from "react-native";
import React from "react";
import { filteredDataItem } from "../../screens/Home";

interface ForecastItemProps extends filteredDataItem {
  label: string;
}

const ForecastItem = ({ label, value, date }: ForecastItemProps) => {
  return (
    <View>
      <Text>
        {label},{value},{date}
      </Text>
    </View>
  );
};

export default ForecastItem;
