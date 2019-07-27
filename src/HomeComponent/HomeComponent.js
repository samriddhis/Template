import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  BackHandler
} from "react-native";
import HeaderComponent from "./HeaderComponent";
const { width, height } = Dimensions.get("window");
import { Icon } from "react-native-elements";
import Swiper from 'react-native-swiper';
export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  _MenuPress() {
    this.props.navigation.navigate("MenuScreen");
  }
  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick() {
    BackHandler.exitApp();
    return null;
  }
  render() {
    return (
      <View style={styles.OuterContainer}>
        <ImageBackground
          source={require("../../images/cake5.jpg")}
          style={styles.ImageStyle}
        >
          <HeaderComponent scope={this} type={"Home"} />
          <View style={styles.FirstContainer}>
            <TouchableOpacity onPress={() => this._MenuPress()}>
              <View opacity={0.3} style={styles.BlockStyle}>
                <Icon
                  reverse
                  name="restaurant-menu"
                  type="material"
                  size={20}
                />
                <Text color={"red"} style={styles.TextStyle}>
                  Menu
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View opacity={0.3} style={styles.BlockStyle}>
                <Icon reverse name="info" type="font-awesome" size={20} />
                <Text style={styles.TextStyle}>About Us</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View opacity={0.3} style={styles.BlockStyle}>
                <Icon reverse name="facebook-f" type="font-awesome" size={20} />
                <Text style={styles.TextStyle}>Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.SecondContainer}>
            <TouchableOpacity>
              <View opacity={0.2} style={styles.BlockStyle}>
                <Icon reverse name="event" type="material" size={20} />
                <Text style={styles.TextStyle}>Events</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View opacity={0.2} style={styles.BlockStyle}>
                <Icon reverse name="user" type="font-awesome" size={20} />
                <Text style={styles.TextStyle}>Profile</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View opacity={0.2} style={styles.BlockStyle}>
                <Icon
                  reverse
                  name="shopping-cart"
                  type="font-awesome"
                  size={20}
                />
                <Text style={styles.TextStyle}>Cart</Text>
              </View>
            </TouchableOpacity>
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
