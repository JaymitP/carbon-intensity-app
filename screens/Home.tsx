import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import { RootStackParamList } from "../components/RootStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import MainContainer from "../components/MainContainer";
import InnerContainer from "../components/InnerContainer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Body from "../components/Body";

import { getData24Hours } from "../utils/API";
import PieChart from "react-native-pie-chart";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ route }: Props) => {
  // Store in current carbon intensity in async storage
  const [carbonIntensity24Hours, setCarbonIntensity24Hours] =
    useState<Object>(null);

  useEffect(() => {
    getData24Hours(route.params.location)
      .then((responseData) => {
        setCarbonIntensity24Hours(responseData.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ["#F44336", "#2196F3", "#FFEB3B", "#4CAF50", "#FF9800"];
  return (
    carbonIntensity24Hours && (
      <MainContainer>
        <Header title={route.params.location} />
        <Body>
          <InnerContainer>
            <Text style={{ fontSize: 20 }}>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.45}
                coverFill={"#FFF"}
              />
              {carbonIntensity24Hours[24]?.intensity.forecast}
            </Text>
          </InnerContainer>
        </Body>
        {/* <Image style={styles.container} source={require('../assets/images/background.jpg')} /> */}
        <NavBar active={route.name} />
      </MainContainer>
    )
  );
};
export default Home;
