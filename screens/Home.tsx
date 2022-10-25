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
import LineChart from "../components/Charts/LineChart";

import { getData24Hours } from "../utils/API";
import Forecast from "../components/Forecast/Forecast";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export interface filteredDataItem {
  value: number;
  date: string;
}

const Home = ({ route }: Props) => {
  // Store current carbon intensity in async storage
  const [carbonIntensity24Hours, setCarbonIntensity24Hours] = useState(null);
  const [filteredData, setFilteredData] =
    useState<Array<filteredDataItem>>(null);
  const fetchData = () =>
    getData24Hours(route.params.location)
      .then((responseJson) => {
        setCarbonIntensity24Hours(responseJson.data.data);
        setFilteredData(
          responseJson.data.data.map((item) => {
            return {
              value: item.intensity.forecast,
              date: new Date(item.to).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
              }),
            };
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });

  useEffect(() => {
    fetchData();
    const comInterval = setInterval(fetchData, 1000 * 60 * 30);
    return () => clearInterval(comInterval);
  }, []);

  return (
    carbonIntensity24Hours && (
      <MainContainer>
        <Header title={route.params.location} />
        <Text>{`Last refreshed ${new Date().toLocaleTimeString()}`}</Text>
        <Body>
          <InnerContainer style={{ marginBottom: 20 }}>
            <DonutChart
              centerText={carbonIntensity24Hours[23]?.intensity.forecast}
              index={carbonIntensity24Hours[23]?.intensity.index}
              data={carbonIntensity24Hours[23]?.generationmix}
            />
          </InnerContainer>
          <InnerContainer>
            <LineChart chartData={filteredData} />
            {/* <Test carbonIntensity24Hours={carbonIntensity24Hours} /> */}
          </InnerContainer>
          <Forecast data={filteredData} />
        </Body>
        {/* <Image style={styles.container} source={require('../assets/images/background.jpg')} /> */}
        <NavBar active={route.name} />
      </MainContainer>
    )
  );
};
export default Home;
