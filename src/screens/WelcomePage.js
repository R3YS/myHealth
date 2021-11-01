import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function WelcomePage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <ImageBackground
            source={require("../assets/images/background1.jpg")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <Text style={styles.welcomeUser}>Welcome User!</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Summary")}
              style={styles.button2}
            >
              <Text style={styles.myHealthId}>My Health ID</Text>
            </TouchableOpacity>
            <View style={styles.rect2}>
              <Text style={styles.loremIpsum}>
                Let&#39;s take a look at our day!
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Activity")}
              style={styles.button}
            >
              <Text style={styles.activityTracker}>Activity Tracker</Text>
            </TouchableOpacity>
            <View style={styles.rect4Stack}>
              <View style={styles.rect4}>
                <Text style={styles.loremIpsum2}>
                  What&#39;s next? Daily To-Do List
                </Text>
              </View>
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
            </View>
            <View style={styles.rect5}>
              <Text style={styles.weeklyReport}>Weekly Report</Text>
            </View>
            <View style={styles.rect6}>
              <Text style={styles.monthlyReport}>Monthly Report</Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Diet")}
              style={styles.button3}
            >
              <Text style={styles.diet}>Diet</Text>
            </TouchableOpacity>
          </ImageBackground>
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
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  scrollArea_contentContainerStyle: {
    height: 1555
  },
  image: {
    width: 1850,
    height: 1570,
    marginTop: -15,
    marginLeft: -624
  },
  image_imageStyle: {},
  welcomeUser: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 36,
    textAlign: "center",
    width: 325,
    height: 47,
    marginTop: 64,
    marginLeft: 641
  },
  button2: {
    width: 280,
    height: 130,
    backgroundColor: "rgba(178,103,245,0.5)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: 15,
    marginTop: 54,
    marginLeft: 664
  },
  myHealthId: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 80,
    height: 18,
    marginTop: 10,
    marginLeft: 10
  },
  rect2: {
    width: 280,
    height: 130,
    backgroundColor: "rgba(239,227,77,0.5)",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 664
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 176,
    height: 18,
    marginLeft: 10
  },
  button: {
    width: 280,
    height: 130,
    backgroundColor: "rgba(148,224,66,0.5)",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 664
  },
  activityTracker: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 96,
    height: 18,
    marginTop: 10,
    marginLeft: 10
  },
  rect4: {
    top: 0,
    width: 280,
    height: 130,
    position: "absolute",
    backgroundColor: "rgba(123,115,115,0.5)",
    left: 40,
    borderRadius: 15
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 211,
    height: 18,
    marginTop: 10,
    marginLeft: 10
  },
  bottombar: {
    left: 0,
    height: 70,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    bottom: 0,
    right: 0
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
  rect4Stack: {
    height: 140,
    marginTop: 20,
    marginLeft: 624,
    marginRight: 866
  },
  rect5: {
    width: 280,
    height: 130,
    backgroundColor: "rgba(106,117,129,0.5)",
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 664
  },
  weeklyReport: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 96,
    height: 20,
    marginTop: 10,
    marginLeft: 10
  },
  rect6: {
    width: 280,
    height: 130,
    backgroundColor: "rgba(178,167,222,0.5)",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 664
  },
  monthlyReport: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 96,
    height: 18,
    marginTop: 10,
    marginLeft: 10
  },
  button3: {
    width: 280,
    height: 130,
    backgroundColor: "rgba(80,227,194,0.5)",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 664
  },
  diet: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 30,
    height: 18,
    marginTop: 10,
    marginLeft: 10
  }
});

export default WelcomePage;
