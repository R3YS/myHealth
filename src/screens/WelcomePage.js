import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Text
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function WelcomePage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group2}>
        <View style={styles.groupRow}>
          <View style={styles.group}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Diet")}
              style={styles.button5}
            >
              <View style={styles.iconStack}>
                <MaterialCommunityIconsIcon
                  name="food-apple"
                  style={styles.icon}
                ></MaterialCommunityIconsIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Diet")}
                  style={styles.button6}
                ></TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rect9Stack}>
            <View style={styles.rect9}>
              <View style={styles.icon2Stack}>
                <MaterialIconsIcon
                  name="directions-bike"
                  style={styles.icon2}
                ></MaterialIconsIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Activity")}
                  style={styles.button7}
                ></TouchableOpacity>
              </View>
            </View>
            <View style={styles.rect8}>
              <View style={styles.icon3Stack}>
                <EntypoIcon name="bar-graph" style={styles.icon3}></EntypoIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Summary")}
                  style={styles.button8}
                ></TouchableOpacity>
              </View>
            </View>
            <View style={styles.rect7}>
              <View style={styles.icon4Stack}>
                <MaterialIconsIcon
                  name="settings"
                  style={styles.icon4}
                ></MaterialIconsIcon>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Settings")}
                  style={styles.button9}
                ></TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
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
            <Text style={styles.goodMorningJoe}>Good Morning Joe!</Text>
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
            <View style={styles.rect4}>
              <Text style={styles.loremIpsum2}>
                What&#39;s next Joe? Daily To-Do List
              </Text>
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
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Settings")}
              style={styles.button4}
            >
              <Text style={styles.settings}>Settings</Text>
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
  group2: {
    width: 414,
    height: 88,
    flexDirection: "row",
    marginTop: 807
  },
  group: {
    height: 88,
    flex: 1
  },
  button5: {
    backgroundColor: "rgba(0,0,0,1)",
    flex: 1
  },
  icon: {
    left: 33,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    bottom: 21,
    height: 43,
    width: 40
  },
  button6: {
    top: 0,
    left: 0,
    width: 105,
    height: 87,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  iconStack: {
    width: 105,
    height: 87
  },
  rect9: {
    left: 0,
    height: 88,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    bottom: 0,
    right: 204
  },
  icon2: {
    left: 30,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    bottom: 24,
    height: 40,
    width: 40
  },
  button7: {
    top: 0,
    left: 0,
    width: 102,
    height: 87,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon2Stack: {
    width: 102,
    height: 87
  },
  rect8: {
    left: 102,
    height: 88,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    bottom: 0,
    right: 102
  },
  icon3: {
    left: 32,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    bottom: 21,
    height: 43,
    width: 40
  },
  button8: {
    top: 0,
    left: 0,
    width: 102,
    height: 87,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon3Stack: {
    width: 102,
    height: 87
  },
  rect7: {
    left: 204,
    height: 88,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    bottom: 0,
    right: 0
  },
  icon4: {
    left: 35,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    bottom: 24,
    height: 40,
    width: 40
  },
  button9: {
    top: 0,
    left: 0,
    width: 105,
    height: 87,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  icon4Stack: {
    width: 105,
    height: 87
  },
  rect9Stack: {
    height: 88,
    flex: 1
  },
  groupRow: {
    height: 88,
    flexDirection: "row",
    flex: 1
  },
  scrollArea: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    marginTop: -895
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
  goodMorningJoe: {
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
    width: 280,
    height: 130,
    backgroundColor: "rgba(123,115,115,0.5)",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 664
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 211,
    height: 18,
    marginTop: 10,
    marginLeft: 10
  },
  rect5: {
    width: 280,
    height: 130,
    backgroundColor: "rgba(106,117,129,0.5)",
    borderRadius: 15,
    marginTop: 20,
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
  },
  button4: {
    width: 280,
    height: 130,
    backgroundColor: "rgba(220,225,30,0.5)",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 664
  },
  settings: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 53,
    height: 18,
    marginTop: 10,
    marginLeft: 10
  }
});

export default WelcomePage;
