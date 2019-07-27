import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import * as data from "../../CakeDetails.json";
const { height, width } = Dimensions.get("window");
import HeaderComponent from "../HomeComponent/HeaderComponent";

export default class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    const records = data.detailList;
    this.state = { cakeDetails: records, listScrollHeight: 0 };
  }
  _renderItem = ({ item, index }) => (
    <View style={styles.listViewStyle}>
      <View>
        <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />
      </View>
      <View style={styles.DetailsStyle}>
        <Text style={styles.TextStyle}>Cake Name : {item.flavor}</Text>
        <Text style={styles.TextStyle}>Price : {item.price}</Text>
        <Text style={styles.TextStyle}>Type : {item.Type}</Text>
        <Text style={styles.TextStyle}>Weight : {item.weight}</Text>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent scope={this} />
        <FlatList
          style={styles.dataStyle}
          ref={ref => (this.listRef = ref)}
          data={this.state.cakeDetails}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          onScroll={event =>
            this.setState({
              listScrollHeight: event.nativeEvent.contentOffset.y
            })
          }
          stickyHeaderIndices={[0]}
          ListHeaderComponent={() => {
            if (this.state.listScrollHeight > height) {
              return (
                <View style={styles.ScrollViewStyle}>
                  <TouchableOpacity
                    onPress={() =>
                      this.listRef.scrollToIndex({ animated: true, index: 0 })
                    }
                    style={styles.ScrollStyle}
                  >
                    <Text style={styles.ScrollTextStyle}>
                      {`Scroll to top`}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            } else return null;
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6"
  },
  separator: {
    width: width,
    height: height / 40,
    backgroundColor: "#ececec"
  },
  listViewStyle: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: width / 20
  },
  DetailsStyle: {
    flexDirection: "column",
    padding: 10
  },
  TextStyle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  ScrollViewStyle: {
    width: width,
    height: height / 15,
    alignItems: "center",
    justifyContent: "center"
  },
  ScrollStyle: {
    width: width / 3,
    height: height / 20,
    borderRadius: width / 30,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  ScrollTextStyle: {
    fontSize: height / 55,
    color: "#2980B9"
  }
});
