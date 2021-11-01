import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Diet(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <ImageBackground
          source={require("../assets/images/Diet2.jpg")}
          resizeMode="stretch"
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
                  style={styles.settingsicon}
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
        <Text style={styles.diettxt}>Diet</Text>
        <TextInput
          placeholder="Calorie Count"
          style={styles.snackinput}
        ></TextInput>
        <TextInput
          placeholder="Calorie Count"
          style={styles.dinnerinput}
        ></TextInput>
        <TextInput
          placeholder="Calorie Count"
          style={styles.lunchinput}
        ></TextInput>
        <TextInput
          placeholder="Calorie Count"
          style={styles.breakfastinput}
        ></TextInput>
        <EntypoIcon name="check" style={styles.checkbreak}></EntypoIcon>
        <EntypoIcon name="check" style={styles.checkdin}></EntypoIcon>
        <EntypoIcon name="check" style={styles.checklun}></EntypoIcon>
        <TouchableOpacity style={styles.buttonbreak}></TouchableOpacity>
        <TouchableOpacity style={styles.buttondinner}></TouchableOpacity>
        <TouchableOpacity style={styles.buttonlunch}></TouchableOpacity>
        <EntypoIcon name="check" style={styles.checksnack}></EntypoIcon>
        <TouchableOpacity style={styles.buttonsnack}></TouchableOpacity>
        <Text style={styles.whatdidyoueattxt}>What did you eat today?</Text>
        <Text style={styles.totalcalorietxt}>Total Calorie Intake: xxx</Text>
        <Text style={styles.percentdailytxt}>Percent Daily Normal: xx%</Text>
        <Text style={styles.breakfast}>Breakfast:</Text>
        <Text style={styles.lunch}>Lunch:</Text>
        <Text style={styles.dinner}>Dinner:</Text>
        <Text style={styles.snacksOthers}>Snacks/Others:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    top: 0,
    left: 0,
    width: 1306,
    height: 1196,
    position: "absolute"
  },
  background_imageStyle: {
    opacity: 0.5
  },
  bottombarFiller: {
    flex: 1
  },
  bottombar: {
    height: 70,
    backgroundColor: "rgba(0,0,0,1)",
    marginBottom: 295,
    marginLeft: 633,
    marginRight: 313
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
  settingsicon: {
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
    left: 98,
    width: 90,
    height: 70,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    bottom: 0
  },
  summarybutton: {
    left: 187,
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
  diettxt: {
    top: 211,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 40,
    height: 42,
    width: 75,
    left: 775
  },
  snackinput: {
    top: 674,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    width: 235,
    left: 653,
    height: 58,
    backgroundColor: "rgba(248,231,28,0.5)"
  },
  dinnerinput: {
    top: 572,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "#121212",
    width: 235,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "rgba(248,231,28,0.5)",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    height: 58,
    left: 653
  },
  lunchinput: {
    top: 469,
    left: 653,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    width: 235,
    backgroundColor: "rgba(248,231,28,0.5)",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    height: 58
  },
  breakfastinput: {
    top: 367,
    left: 653,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "#121212",
    width: 235,
    textAlign: "center",
    fontSize: 16,
    borderWidth: 3,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 15,
    height: 58,
    backgroundColor: "rgba(248,231,28,0.5)"
  },
  checkbreak: {
    top: 375,
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40,
    right: 364
  },
  checkdin: {
    top: 576,
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40,
    right: 361
  },
  checklun: {
    top: 477,
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40,
    right: 363
  },
  buttonbreak: {
    top: 369,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    right: 360,
    width: 50
  },
  buttondinner: {
    top: 576,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    width: 50,
    right: 357
  },
  buttonlunch: {
    top: 474,
    height: 50,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    right: 358,
    width: 50
  },
  checksnack: {
    position: "absolute",
    color: "rgba(66,133,48,1)",
    fontSize: 40,
    right: 364,
    top: 675
  },
  buttonsnack: {
    top: 670,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0,
    height: 50,
    width: 50,
    right: 358
  },
  whatdidyoueattxt: {
    top: 289,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    left: 706,
    width: 225,
    height: 24,
    textAlign: "center"
  },
  totalcalorietxt: {
    left: 658,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    height: 35,
    width: 264,
    top: 756
  },
  percentdailytxt: {
    left: 658,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    height: 29,
    width: 262,
    top: 791
  },
  breakfast: {
    left: 658,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 16,
    width: 82,
    height: 20,
    top: 341
  },
  lunch: {
    top: 444,
    left: 658,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 16,
    width: 58,
    height: 20
  },
  dinner: {
    top: 547,
    left: 658,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 16,
    width: 59,
    height: 20
  },
  snacksOthers: {
    top: 649,
    left: 658,
    position: "absolute",
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 16,
    width: 118,
    height: 20
  },
  backgroundStack: {
    width: 1306,
    height: 1196,
    marginTop: -161,
    marginLeft: -633
  }
});

export default Diet;
