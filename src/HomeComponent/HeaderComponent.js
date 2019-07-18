import React from "react";
import { View, Text,StyleSheet,Dimensions ,SafeAreaView } from "react-native";
const {width,height} = Dimensions.get('window')

export const HeaderComponent = props => {
  return (
    <SafeAreaView  style = {styles.headerStyle}>
      <Text style ={styles.headerTextStyle}>Cake House</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    headerStyle:{
        width:width,
        height:height/12,
        backgroundColor:"#2980B9",
        justifyContent:"center",
        alignItems:"center"
    },
    headerTextStyle:{
        fontSize:30
    }
})
