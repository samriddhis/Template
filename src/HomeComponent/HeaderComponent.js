import React from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from "react-native";
const { width, height } = Dimensions.get("window");
import { Icon } from "react-native-elements";

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this._logOutPress = this._logOutPress.bind(this);
  }
  _logOutPress() {
    console.log("hello");
  }
  render() {
    return (
      <SafeAreaView style={styles.headerStyle}>
        <Text style={styles.headerTextStyle}>Cake House</Text>
        <View style={styles.IconViewStyle}>
          <Icon
            style={styles.IconStyle}
            name="power-off"
            type="font-awesome"
            onPress={() => this._logOutPress()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    width: width,
    height: height / 12,
    backgroundColor: "#2980B9",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  headerTextStyle: {
    fontSize: 30
  },
  IconViewStyle: { marginTop: 8, marginLeft: 20 },
  IconStyle: {}
});
