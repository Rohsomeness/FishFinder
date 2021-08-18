import React from 'react';
import { StyleSheet, View, Text, Dimensions, Button, Alert } from 'react-native';
import WavyHeader from './WavyHeader';
import WavyFooter from './WavyFooter' ;

export default function MainScreen() {
    return (
      <View style={styles.container}>
        <WavyHeader
          customStyles={styles.svgCurve}
          customHeight={60}
          customTop={65}
          customBgColor="#fff"
          customWaveColor = "#ffd700"
          customWavePattern="M0,96L40,90.7C80,85,160,75,240,85.3C320,96,400,128,480,149.3C560,171,640,181,720,165.3C800,149,880,107,960,85.3C1040,64,1120,64,1200,85.3C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        />
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Fish Finder</Text>
        </View>
        <View>
           <Button 
            // border="none"
            // color="pink"
            // height = "200px"
            // onClick={() => console.log("You clicked on the pink circle!")}
            // radius = "50%"
            // width = "200px"
            // children = "I'm a pink circle!"
            onPress={ () => {
              console.log("\"Fin\"ding Fish!");
              Alert.alert("\"Fin\"ding Fish!");
              }
            }
            title="Find Fish?"
            color="#841584"
            accessibilityLabel="Find Fish?"
          />
         </View>
         <View style={styles.container}>
            <WavyFooter
              customStyles={styles.svgCurve}
              customHeight={60}
              customTop={65}
              customBgColor="#fff"
              customWaveColor = "#ffd700"
              customWavePattern="M0,96L40,90.7C80,85,160,75,240,85.3C320,96,400,128,480,149.3C560,171,640,181,720,165.3C800,149,880,107,960,85.3C1040,64,1120,64,1200,85.3C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            />
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000b76'
    },
    headerContainer: {
      marginTop: 50,
      marginHorizontal: 10
    },
    svgCurve: {
      position: 'absolute',
      width: Dimensions.get('window').width
    },
    headerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#ffffff',
      textAlign: 'center',
      marginTop: 35
    },

  });