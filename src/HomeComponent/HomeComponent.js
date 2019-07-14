import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";
import { HeaderComponent } from "./HeaderComponent";
const { width, height } = Dimensions.get("window");
export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.OuterContainer}>
        <ImageBackground source={require("../../images/banner1.jpg")} style={styles.ImageStyle}>
          <HeaderComponent />
          <Text>heelllo</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ImageStyle: {
      width:width,
      height:height
  }
});
