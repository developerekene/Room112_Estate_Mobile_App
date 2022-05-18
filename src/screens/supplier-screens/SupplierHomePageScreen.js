import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Colors from "../../components/Colors";
import { AntDesign, Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function SupplierHomePageScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toobarSection}>
        <View style={styles.alermPart}>
          <Text style={styles.text}>Hi, Supplier 👋</Text>
          <MaterialCommunityIcons name="bell" size={24} color="white" />
        </View>
        <View style={styles.searchbar}>
          <Feather name="search" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for consumers"
            style={styles.innertextinputstyle}
          />
        </View>
      </View>
      <View style={styles.secondLayer}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons
            name="view-dashboard-outline"
            size={30}
            style={{ paddingTop: 5 }}
          />
          <Text
            style={{
              fontSize: 24,
              color: Colors.black,
              fontWeight: "700",
              marginLeft: 10,
            }}
          >
            OverView
          </Text>
        </View>
        <TouchableOpacity style={styles.card1}>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: 40,
                fontWeight: "900",
              }}
            >
              98
            </Text>
          </View>

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.textSize}>Total</Text>
            <Text style={styles.textSize}>Supplies Made</Text>
          </View>
          <View style={{ marginLeft: 145 }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2}>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: 40,
                fontWeight: "900",
              }}
            >
              111
            </Text>
          </View>

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.textSize}>Total</Text>
            <Text style={styles.textSize}>orders received</Text>
          </View>
          <View style={{ marginLeft: 145 }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card3}>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: 40,
                fontWeight: "900",
              }}
            >
              32
            </Text>
          </View>

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.textSize}>Past</Text>
            <Text style={styles.textSize}>Consumer Details</Text>
          </View>
          <View style={{ marginLeft: 145 }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card4}>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: 40,
                fontWeight: "900",
              }}
            >
              12
            </Text>
          </View>

          <View style={{ marginLeft: 10 }}>
            <Text style={styles.textSize}>Total</Text>
            <Text style={styles.textSize}>Supplies Made</Text>
          </View>
          <View style={{ marginLeft: 145 }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: Colors.white,

    width: "100%",
  },
  toobarSection: {
    padding: 10,
    width: "100%",
    height: 120,
    backgroundColor: "#147df5",
  },
  alermPart: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: Colors.white,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 16,
    fontWeight: "400",
  },
  searchbar: {
    height: 48,
    width: "100%",
    backgroundColor: Colors.white,
    flexDirection: "row",
    padding: 5,
    marginTop: 17,
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 24,
    color: Colors.gray,
    marginLeft: 20,
  },
  innertextinputstyle: {
    fontSize: 18,
    marginLeft: 15,
    flex: 1,
  },
  secondLayer: {
    width: "100%",
    padding: 10,
  },
  first: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  card1: {
    height: 110,
    width: "100%",
    backgroundColor: "#147df50d",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 16,
  },
  card2: {
    height: 110,
    width: "100%",
    backgroundColor: "#ffbe0b0d",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 16,
  },
  card3: {
    height: 110,
    width: "100%",
    backgroundColor: "#ef233c0d",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 16,
  },
  card4: {
    height: 110,
    width: "100%",
    backgroundColor: "rgba(56, 176, 0, 0.05)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 16,
  },
  textSize: {
    fontSize: 16,
    fontWeight: "300",
    color: Colors.black,
  },
});

export default SupplierHomePageScreen;
