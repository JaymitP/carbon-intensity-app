import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import { RootStackParamList } from "../components/RootStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import MainContainer from "../components/MainContainer";
import InnerContainer from "../components/InnerContainer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import DonutChart from "../components/Charts/DonutChart";

import { getData24Hours } from "../utils/API";
const donutData = [
  { name: "<5", value: 19 },
  { name: "5-9", value: 20 },
  { name: "10-14", value: 19 },
  { name: "15-19", value: 24 },
  { name: "20-24", value: 22 },
  { name: "25-29", value: 29 },
  { name: "30-34", value: 22 },
  { name: "35-39", value: 18 },
  { name: "40-44", value: 23 },
  { name: "45-49", value: 19 },
  { name: "50-54", value: 16 },
  { name: "55-59", value: 19 },
  { name: "60-64", value: 28 },
  { name: "65-69", value: 17 },
  { name: "70-74", value: 20 },
  { name: "75-79", value: 17 },
  { name: "80-84", value: 18 },
  { name: "≥85", value: 21 },
];
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ route }: Props) => {
  // Store in current carbon intensity in async storage
  const [carbonIntensity24Hours, setCarbonIntensity24Hours] =
    useState<Object>(null);

  useEffect(() => {
    getData24Hours(route.params.location)
      .then((responseJson) => {
        setCarbonIntensity24Hours(responseJson.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    carbonIntensity24Hours && (
      <MainContainer>
        <Header title={route.params.location} />
        <Body>
          <InnerContainer>
            <DonutChart
              centerText={carbonIntensity24Hours[24]?.intensity.forecast}
              data={carbonIntensity24Hours[24]?.generationmix}
            />
          </InnerContainer>
        </Body>
        {/* <Image style={styles.container} source={require('../assets/images/background.jpg')} /> */}
        <NavBar active={route.name} />
      </MainContainer>
    )
  );
};
export default Home;
