import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  FlatList,
  Picker,
  Modal,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const messages = [
  {
    id: 1,
    title: "112",
    description: "Bottles delivered successful",
  },
  {
    id: 2,
    title: "24",
    description: "Default Bottles",
  },
  {
    id: 3,
    title: "7",
    description: "Failed delivery",
  },
];
import ListItemForTotalSupply from "../components/ListItemForTotalSupply";
class TotalSupplyMadeActivityOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>← Back</Text>
        <View style={styles.overview}>
          <Text style={styles.overviewText}>Activity OverView</Text>
          <Text style={styles.supplyText}>
            Showing all supplies, failed and delivered
          </Text>
        </View>
        <View style={styles.horizontal}></View>
        <View style={styles.main}>
          <View style={styles.supplymadeIconSection}>
            <View>
              <Text>Supply Made</Text>
            </View>
            <View style={styles.Icon_part}>
              <Text>In the past</Text>
              <View>
                <MaterialIcons
                  name="arrow-drop-down"
                  size={30}
                  color="#21334f"
                  style={styles.icon}
                  onPress={() => {
                    if (count == 0) {
                      this.setState({ show: true });
                    } else {
                      this.setState({ show: false });
                    }
                    count++;

                    console.log(count);
                  }}
                />
                <Modal transparent={true} visible={this.state.show}>
                  <View
                    style={{
                      backgroundColor: "rgb(201, 208, 210)", //RGB (201, 208, 210)
                      margin: 10,
                      padding: 20,
                      width: 100,
                      // backgroundColor: " #FFFFFF",
                      position: "absolute",
                      right: 20,
                      top: 160,
                    }}
                  >
                    <Text>7 days</Text>
                    <Text>2 weeks</Text>
                    <Text>1 month</Text>
                    <Text>6 month</Text>
                  </View>
                </Modal>
              </View>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            <LineChart
              data={{
                labels: ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                  {
                    data: [0, 10, 15, 30, 40, 60, 50, 10],
                  },
                ],
              }}
              width={Dimensions.get("window").width} // from react-native
              height={250}
              // yAxisLabel="$"
              // yAxisSuffix="k"
              yAxisInterval={10} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e5e5e5",
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "rgb(255, 255, 255,0.5)",
                decimalPlaces: 0, // optional, defaults to 2dp
                withDots: false,
                color: () => "rgba(20, 125, 245, 1)",

                //linear-gradient(180deg, #147DF5 50.21%, rgba(20, 125, 245, 0.05) 95.64%), //rgba(20, 125, 245, 0.05) 95.64%)
                labelColor: (opacity = 1) => `rgba(33, 51, 79, ${opacity})`, //  rgba(33, 51, 79, 1)

                style: {
                  borderRadius: 16,
                },
                // propsForDots: {
                //   r: "6",
                //   strokeWidth: "2",
                //   stroke: "#ffa726",
                // },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
          <FlatList
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({ item }) => (
              <ListItemForTotalSupply
                title={item.description}
                num={item.title}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 20 : 0,

    flex: 1,
    // backgroundColor: "blue",
  },
  overview: {
    padding: 10,
    marginTop: 20,
  },
  overviewText: {
    fontSize: 24,
    color: "#21334f",
    fontWeight: "700",
    lineHeight: 33,
  },
  supplyText: {
    color: "#21334f",
    marginTop: 5,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "300",
  },
  horizontal: {
    backgroundColor: "rgba(0, 0, 0, 0.02)",
    height: 6,
    marginTop: 10,
  },
  main: {
    padding: 10,
  },
  supplymadeIconSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  supply_made: {
    color: "#21334f",
    fontSize: 14,
    fontWeight: "700",
  },
  Icon_part: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    marginLeft: 2,
    marginBottom: 5,
  },
  icon_text: {
    color: "#21334f",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "300",
    fontStyle: "normal",
  },
  modal: {
    backgroundColor: "rgb(201, 208, 210)",
  },
});

export default TotalSupplyMadeActivityOverview;
