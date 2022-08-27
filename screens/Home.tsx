import { Text, View, StyleSheet, Image, Button, SafeAreaView} from 'react-native';
import React, { FunctionComponent  } from 'react'

import { RootStackParamList } from '../components/RootStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Green Electricity Forecast</Text>
        </View>
        {/* <Image style={styles.tinyLogo} source={require('@expo/snack-static/react-native-logo.png')}></Image> */}
        <Image style={styles.container} source={require('../assets/images/background.jpg')} />
          {/* <ForecastView apiBaseUrl={apiBaseUrl}/> */}
        <View style={styles.footer}>
          {/* <Image style={styles.footerimage} source={require('./assets/images/edflogo.png')} /> */}
          <Text style={styles.footertext}>This app shows the forecast carbon intensity of GB electricity in gCO2/kWh. Lower numbers mean your electricity is greener. Data provided by the National Grid. Visit carbonintensity.org.uk for details.</Text>
        <Button title="map" onPress={() => navigation.navigate('Map')} />
        </View>
    </SafeAreaView>
  )
}
 export default Home

const styles = StyleSheet.create({
  
    header: {
      backgroundColor: '#bfd45f',
      paddingTop: 25,
      paddingLeft: 10,
      height: 70,
      borderBottomWidth: 2,
      borderColor: 'rgb(38,121,173)',
      marginBottom: 2,
    },
    
    headertext: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
    },
  
    container: {
      flex: 1,
      width: null,
      height: null,
    },
    
    footer: {
      height: 80,
      flexDirection: "row",
      backgroundColor: '#d8e8f4',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: '#c5d3de',
    },
    
    footertext: {
      fontSize: 9,
      flex: 1,
      color: 'black',
      marginLeft: 10,
      marginRight: 10,
    },
  
    footerimage: {
      height: 35,
      width: 100,
      marginLeft: 10,
    },
  
  });