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
import ChartWithAdjustingPointer from "../components/Charts/LineChart";

import { getData24Hours } from "../utils/API";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ route }: Props) => {
  // Store current carbon intensity in async storage
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
          <InnerContainer style={{ marginBottom: 20 }}>
            <DonutChart
              centerText={carbonIntensity24Hours[23]?.intensity.forecast}
              index={carbonIntensity24Hours[23]?.intensity.index}
              data={carbonIntensity24Hours[23]?.generationmix}
            />
          </InnerContainer>
          <InnerContainer>
            <ChartWithAdjustingPointer />
          </InnerContainer>
        </Body>
        {/* <Image style={styles.container} source={require('../assets/images/background.jpg')} /> */}
        <NavBar active={route.name} />
      </MainContainer>
    )
  );
};
export default Home;
