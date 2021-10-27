import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconButtonsFooter5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
        onPress={() => console.log("Navigate to Diet")}
        style={styles.buttonWrapper1}
      >
        <MaterialCommunityIconsIcon
          name={props.icon1 || "food-apple"}
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
        onPress={() => console.log("Navigate to Activity")}
        style={styles.buttonWrapper2}
      >
        <MaterialCommunityIconsIcon
          name={props.activeIcon || "bike"}
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
        onPress={() => console.log("Navigate to Summary")}
        style={styles.buttonWrapper3}
      >
        <MaterialCommunityIconsIcon
          name={props.icon3 || "chart-bar"}
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
        onPress={() => console.log("Navigate to Settings")}
        style={styles.buttonWrapper4}
      >
        <MaterialCommunityIconsIcon
          name={props.icon4 || "settings"}
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
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
  buttonWrapper1: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  buttonWrapper2: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  buttonWrapper3: {
    flex: 1,
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
  buttonWrapper4: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  }
});

export default MaterialIconButtonsFooter5;
