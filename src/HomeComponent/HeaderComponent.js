import React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
const { width, height } = Dimensions.get("window");
import { Icon } from "react-native-elements";

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this._logOutPress = this._logOutPress.bind(this);
    this.scope = this.props.scope;
  }
  _logOutPress() {
    this.scope.props.navigation.navigate("LoginScreen");
  }

  _goBackPress() {
    this.scope.props.navigation.goBack();
  }

  render() {
    return (
      <SafeAreaView style={styles.headerStyle}>
        {this.props.type != "Home" ? (
          <View style={styles.BackIconViewStyle}>
            <Icon
              style={styles.BackIconStyle}
              name="arrow-back"
              type="material"
              onPress={() => this._goBackPress()}
            />
          </View>
        ) : (
          <View />
        )}
        <Text style={styles.headerTextStyle}>Cake House</Text>
        {this.props.type == "Home" ? (
          <View style={styles.IconViewStyle}>
            <Icon
              style={styles.IconStyle}
              name="power-off"
              type="font-awesome"
              onPress={() => this._logOutPress()}
            />
          </View>
        ) : (
          <View />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    width: width,
    height: height / 12,
    backgroundColor: "#2980B9",
    alignItems: "center",
    flexDirection: "row",
    padding:10
  },
  headerTextStyle: {
    fontSize: 30,
    marginLeft:100
  },
  BackIconViewStyle: {},
  BackIconStyle: {},
  IconViewStyle: { marginTop: 8, marginLeft: 100 },
  IconStyle: {}
});
