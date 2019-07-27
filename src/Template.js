import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
const { width, height } = Dimensions.get("window");
import { Icon, Button } from "react-native-elements";

export default class Template extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.OuterContainer}>
        <View style={styles.HeaderStyle}>
          <Text style={styles.HeaderTextStyle1}>Relax Plan</Text>
          <View>
            <Text style={styles.HeaderTextStyle2}>₹2,999</Text>
            <Text style={styles.HeaderTextStyle3}>+18%GST</Text>
          </View>
        </View>
        <View style={styles.InnerStyle}>
          <Text style={styles.InnerTextStyle1}>
            Lots of tenants choices.Super-fast clousure.
          </Text>
          <Text style={styles.InnerTextStyle2}>Zero Unwanted calls.</Text>
          <View style={styles.InnerStyle2}>
            <View style={styles.firstViewStyle}>
              <Icon name="user" type="entypo" size={20} />
              <Text style={styles.firstTextStyle}>Personal Assistant</Text>
            </View>
            <View style={styles.secondViewStyle}>
              <Icon name="docs" type="simple-line-icon" size={20} />
              <Text style={styles.firstTextStyle}>
                Privacy of your phone number
              </Text>
            </View>
            <View style={styles.firstViewStyle}>
              <Icon name="page-search" type="foundation" size={20} />
              <Text style={styles.firstTextStyle}>Property promotion</Text>
            </View>
            <View style={styles.secondViewStyle}>
              <Icon name="md-woman" type="ionicon" size={20} />
              <Text style={styles.firstTextStyle}>
                Rental Agreement - Home delivered
              </Text>
            </View>
            <View style={styles.firstViewStyle}>
              <Icon name="staro" type="antdesign" size={20} />
              <Text style={styles.firstTextStyle}>
                Facebook Marketing Of Property
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.ButtonStyle} color="#e5593f">
          <Text style={{ color: "#fff" }}>{"BUY NOW"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  OuterContainer: {
    flex: 1
  },
  HeaderStyle: {
    width: width,
    height: height / 10,
    backgroundColor: "#e5593f",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 13
  },
  HeaderTextStyle1: {
    fontSize: 26,
    fontWeight: "400",
    color: "white"
  },
  HeaderTextStyle2: {
    fontSize: 26,
    fontWeight: "400",
    color: "white"
  },
  HeaderTextStyle3: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    marginLeft: 12
  },
  InnerStyle: {
    padding: 25,
    height: height / 1.3
  },
  InnerStyle2: {},
  InnerTextStyle1: {
    fontSize: 17,
    fontWeight: "600",
    color: "#e5593f"
  },
  InnerTextStyle2: {
    fontSize: 17,
    fontWeight: "600",
    color: "#e5593f"
  },
  InnerStyle2: {
    marginTop: 13
  },
  firstViewStyle: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#fff0ee",
    borderRadius: 5
  },
  firstTextStyle: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 13,
    color: "#808080"
  },
  secondViewStyle: {
    padding: 15,
    flexDirection: "row"
  },
  ButtonStyle: {
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    width: width / 1.1,
    height: height / 17,
    borderRadius: 3,
    backgroundColor: "#e5593f"
  }
});
