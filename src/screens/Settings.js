import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialSwitch14 from "../components/MaterialSwitch14";
import MaterialSwitch13 from "../components/MaterialSwitch13";
import MaterialSwitch12 from "../components/MaterialSwitch12";
import MaterialSwitch11 from "../components/MaterialSwitch11";
import MaterialSwitch10 from "../components/MaterialSwitch10";

function Settings(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.backgroundStack}>
            <ImageBackground
              source={require("../assets/images/tech.jpg")}
              resizeMode="contain"
              style={styles.background}
              imageStyle={styles.background_imageStyle}
            >
              <View style={styles.bottombarFiller}></View>
              <View style={styles.bottombar}>
                <View style={styles.stackFiller}></View>
                <View style={styles.groupStack}>
                  <View style={styles.group}>
                    <MaterialCommunityIconsIcon
                      name="food-apple"
                      style={styles.dieticon}
                    ></MaterialCommunityIconsIcon>
                    <MaterialIconsIcon
                      name="directions-bike"
                      style={styles.bikeicon}
                    ></MaterialIconsIcon>
                    <EntypoIcon
                      name="area-graph"
                      style={styles.summaryicon}
                    ></EntypoIcon>
                    <IoniconsIcon
                      name="md-settings"
                      style={styles.settingicon}
                    ></IoniconsIcon>
                  </View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Diet")}
                    style={styles.dietbutton}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Activity")}
                    style={styles.bikebutton}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("WelcomePage")}
                    style={styles.summarybutton}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Settings")}
                    style={styles.settingbutton}
                  ></TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.setbar}>
              <View style={styles.repUnitsRow}>
                <Text style={styles.repUnits}>
                  Set Units:{"\n"}
                  {"\t"}(default is 8 reps)
                </Text>
                <View style={styles.setswitchColumn}>
                  <MaterialSwitch14 style={styles.setswitch}></MaterialSwitch14>
                  <Text style={styles.changeTo12}>Change to 12</Text>
                </View>
              </View>
            </View>
            <View style={styles.foodbar}>
              <View style={styles.foodUnitsRow}>
                <Text style={styles.foodUnits}>
                  Food Units:{"\n"}
                  {"\t"}(default is oz)
                </Text>
                <View style={styles.foodswitchColumn}>
                  <MaterialSwitch13
                    style={styles.foodswitch}
                  ></MaterialSwitch13>
                  <Text style={styles.changeToG}>Change to g</Text>
                </View>
              </View>
            </View>
            <View style={styles.timebar}>
              <View style={styles.timeUnitsRow}>
                <Text style={styles.timeUnits}>
                  Time Units:{"\n"}
                  {"\t"}(default is min)
                </Text>
                <View style={styles.timeswitchColumn}>
                  <MaterialSwitch12
                    style={styles.timeswitch}
                  ></MaterialSwitch12>
                  <Text style={styles.changeToHr}>Change to hr</Text>
                </View>
              </View>
            </View>
            <View style={styles.weightbar}>
              <View style={styles.weightUnitsRow}>
                <Text style={styles.weightUnits}>
                  Weight Units:{"\n"}
                  {"\t"}(default is lbs)
                </Text>
                <View style={styles.weightswitchColumn}>
                  <MaterialSwitch11
                    style={styles.weightswitch}
                  ></MaterialSwitch11>
                  <Text style={styles.changeToKg}>Change to kg</Text>
                </View>
              </View>
            </View>
            <View style={styles.distancebar}>
              <View style={styles.distanceUnitsRow}>
                <Text style={styles.distanceUnits}>
                  Distance Units:{"\n"}
                  {"\t"}(default is mi)
                </Text>
                <View style={styles.distanceswitchColumn}>
                  <MaterialSwitch10
                    style={styles.distanceswitch}
                  ></MaterialSwitch10>
                  <Text style={styles.changeToKm}>Change to km</Text>
                </View>
              </View>
            </View>
            <Text style={styles.settingstxt}>Settings</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    backgroundColor: "rgba(230, 230, 230,1)",
    flex: 1
  },
  scrollArea_contentContainerStyle: {
    height: 1278
  },
  background: {
    top: 0,
    left: 0,
    width: 1172,
    height: 1373,
    position: "absolute"
  },
  background_imageStyle: {
    opacity: 0.7
  },
  bottombarFiller: {
    flex: 1
  },
  bottombar: {
    height: 70,
    backgroundColor: "rgba(0,0,0,1)",
    marginBottom: 538,
    marginLeft: 395,
    marginRight: 417
  },
  stackFiller: {
    flex: 1
  },
  group: {
    left: 0,
    height: 40,
    position: "absolute",
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 15
  },
  dieticon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  bikeicon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  summaryicon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  settingicon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  dietbutton: {
    left: 0,
    width: 90,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  bikebutton: {
    left: 96,
    width: 90,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  summarybutton: {
    left: 191,
    width: 85,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  settingbutton: {
    left: 276,
    width: 84,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  groupStack: {
    height: 70
  },
  setbar: {
    top: 620,
    width: 332,
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,0.7)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    left: 409
  },
  repUnits: {
    fontFamily: "roboto-700",
    color: "#121212",
    width: 162,
    fontSize: 14,
    height: 39,
    textAlign: "left"
  },
  setswitch: {
    width: 45,
    height: 23,
    marginLeft: 10
  },
  changeTo12: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 10,
    height: 12,
    width: 66,
    textAlign: "center",
    marginTop: 7
  },
  setswitchColumn: {
    width: 66,
    marginLeft: 73
  },
  repUnitsRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 26,
    marginRight: 5
  },
  foodbar: {
    top: 520,
    width: 332,
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,0.7)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    left: 409
  },
  foodUnits: {
    fontFamily: "roboto-700",
    color: "#121212",
    width: 150,
    fontSize: 14,
    height: 37,
    textAlign: "left"
  },
  foodswitch: {
    width: 45,
    height: 23,
    marginLeft: 10
  },
  changeToG: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 10,
    height: 12,
    width: 57,
    textAlign: "center",
    marginTop: 7
  },
  foodswitchColumn: {
    width: 57,
    marginLeft: 85
  },
  foodUnitsRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 26,
    marginRight: 14
  },
  timebar: {
    top: 419,
    width: 332,
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,0.7)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    left: 409
  },
  timeUnits: {
    fontFamily: "roboto-700",
    color: "#121212",
    width: 162,
    fontSize: 14,
    height: 39,
    textAlign: "left"
  },
  timeswitch: {
    width: 45,
    height: 23,
    marginLeft: 10
  },
  changeToHr: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 10,
    height: 12,
    width: 59,
    textAlign: "center",
    marginTop: 7
  },
  timeswitchColumn: {
    width: 59,
    marginLeft: 73
  },
  timeUnitsRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 26,
    marginRight: 12
  },
  weightbar: {
    top: 320,
    width: 332,
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,0.7)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    left: 409
  },
  weightUnits: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 14,
    height: 38,
    textAlign: "left",
    width: 140
  },
  weightswitch: {
    width: 45,
    height: 23,
    marginLeft: 10
  },
  changeToKg: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 10,
    height: 12,
    width: 61,
    textAlign: "center",
    marginTop: 7
  },
  weightswitchColumn: {
    width: 61,
    marginLeft: 95
  },
  weightUnitsRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 26,
    marginRight: 10
  },
  distancebar: {
    top: 218,
    width: 332,
    height: 90,
    position: "absolute",
    backgroundColor: "rgba(74,144,226,0.7)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    left: 409
  },
  distanceUnits: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 14,
    textAlign: "left",
    width: 151,
    height: 36
  },
  distanceswitch: {
    width: 45,
    height: 23,
    marginLeft: 10
  },
  changeToKm: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 10,
    width: 66,
    height: 12,
    textAlign: "center",
    marginTop: 7
  },
  distanceswitchColumn: {
    width: 66,
    marginLeft: 84
  },
  distanceUnitsRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 26,
    marginRight: 5
  },
  settingstxt: {
    top: 145,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 40,
    left: 476,
    width: 222,
    height: 60,
    textAlign: "center"
  },
  backgroundStack: {
    width: 1172,
    height: 1373,
    marginTop: -95,
    marginLeft: -395
  }
});

export default Settings;
