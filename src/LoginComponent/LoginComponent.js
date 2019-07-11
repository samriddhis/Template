import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ImageBackground
} from "react-native";
import { Avatar } from "react-native-elements";
const { height, width } = Dimensions.get("window");

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.ImageOuterContainer}>
        <ImageBackground
          style={styles.imageStyle}
          source={require("../../images/background.jpg")}
        >
          <View style={styles.AccViewStyle}>
            <Text style={styles.AccTextStyle}>{"My Account"}</Text>
          </View>
          <View style={styles.IconStyle}>
            <Avatar rounded size="medium" icon={{ name: "user", type: "font-awesome" }} />
          </View>
          <View style={styles.OuterContainer}>
            <TextInput
              style={styles.LoginStyle}
              underlineColorAndroid="#D3D3D3"
              placeholder="Login"
            />
            <TextInput
              style={styles.PasswordStyle}
              underlineColorAndroid="#D3D3D3"
              placeholder="Password"
            />
            <Text style={styles.ForgotTextStyle}>{"Forgot Password?"}</Text>
            <TouchableOpacity style={styles.ButtonStyle} color="#0966aa">
              <Text style={{ color: "#fff" }}>{"Submit"}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AccViewStyle: {
    width: width / 2,
    height: height / 10,
    alignItems: "center",
  },
  AccTextStyle: {
    color: "#fff",
    fontSize: 25
  },
  IconStyle: {
    width: width / 5,
    height: height / 10,
    borderRadius:40,
    backgroundColor: "#00cc66",
    alignItems:'center',
    justifyContent:'center'
  },
  imageStyle: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center"
  },
  OuterContainer: {
    width: width / 1.3,
    height: height / 2.3,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOpacity: 2.0,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  LoginStyle: { width: width / 1.8 },
  PasswordStyle: { width: width / 1.8 },
  ForgotTextStyle: { marginLeft: 100 },
  ButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: width / 1.8,
    height: height / 20,
    borderRadius: 5,
    backgroundColor: "#0966aa"
  }
});
