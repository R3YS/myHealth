import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialBasicFooter1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Diet")}
        style={styles.btnWrapper1}
      >
        <MaterialCommunityIconsIcon
          name="food-apple"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.diet}>Diet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Activity")}
        style={styles.activebtnWrapper}
      >
        <MaterialCommunityIconsIcon
          name="bike"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.activity}>Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Data")}
        style={styles.btnWrapper2}
      >
        <MaterialCommunityIconsIcon
          name="folder"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.data}>Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Navigate to Settings")}
        style={styles.btnWrapper3}
      >
        <MaterialCommunityIconsIcon
          name="settings"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.settings}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3f51b5",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  btnWrapper1: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 6,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    opacity: 0.8
  },
  diet: {
    color: "#FFFFFF",
    opacity: 0.8
  },
  activebtnWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  activity: {
    color: "#FFFFFF",
    fontSize: 14,
    paddingTop: 4
  },
  btnWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 6,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  data: {
    color: "#FFFFFF",
    opacity: 0.8
  },
  btnWrapper3: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 6,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  settings: {
    color: "#FFFFFF",
    opacity: 0.8
  }
});

export default MaterialBasicFooter1;
