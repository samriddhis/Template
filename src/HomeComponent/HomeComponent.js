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
import { Icon } from "react-native-elements";
export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.OuterContainer}>
        <ImageBackground
          source={require("../../images/cake5.jpg")}
          style={styles.ImageStyle}
        >
          <HeaderComponent />
          <View style={styles.FirstContainer}>
            <View opacity={0.3} style={styles.BlockStyle}>
              <Icon reverse name="restaurant-menu" type="material" size={20} />
              <Text color={"red"} style={styles.TextStyle}>
                Menu
              </Text>
            </View>
            <View opacity={0.3} style={styles.BlockStyle}>
              <Icon reverse name="info" type="font-awesome" size={20} />
              <Text style={styles.TextStyle}>About Us</Text>
            </View>
            <View opacity={0.3} style={styles.BlockStyle}>
              <Icon reverse name="facebook-f" type="font-awesome" size={20} />
              <Text style={styles.TextStyle}>Facebook</Text>
            </View>
          </View>
          <View style={styles.SecondContainer}>
            <View opacity={0.2} style={styles.BlockStyle}>
              <Icon reverse name="event" type="material" size={20} />
              <Text style={styles.TextStyle}>Events</Text>
            </View>
            <View opacity={0.2} style={styles.BlockStyle}>
              <Icon reverse name="user" type="font-awesome" size={20} />
              <Text style={styles.TextStyle}>Profile</Text>
            </View>
            <View opacity={0.2} style={styles.BlockStyle}>
              <Icon
                reverse
                name="shopping-cart"
                type="font-awesome"
                size={20}
              />
              <Text style={styles.TextStyle}>Cart</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ImageStyle: {
    width: width,
    height: height
  },
  FirstContainer: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: height / 1.85,
    padding: 10
  },
  BlockStyle: {
    width: width / 3.5,
    height: height / 8,
    backgroundColor: "black",
    borderColor: "#FFF",
    borderWidth: 0.5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  SecondContainer: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  TextStyle: {
    fontSize: 20
  }
});
