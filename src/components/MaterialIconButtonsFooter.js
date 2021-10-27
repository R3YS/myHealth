import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialIconButtonsFooter1 from "./MaterialIconButtonsFooter1";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialIconButtonsFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <MaterialIconButtonsFooter1
        style={styles.materialIconButtonsFooter1}
      ></MaterialIconButtonsFooter1>
      <View style={styles.iconRow}>
        <EntypoIcon name="bowl" style={styles.icon}></EntypoIcon>
        <FeatherIcon name="folder" style={styles.icon3}></FeatherIcon>
        <MaterialCommunityIconsIcon
          name="bike"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
        <FeatherIcon name="settings" style={styles.icon5}></FeatherIcon>
      </View>
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
  materialIconButtonsFooter1: {
    height: 56,
    width: 375,
    marginLeft: 77,
    marginTop: -131
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 31,
    marginTop: 2
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 45,
    marginTop: 1
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 47,
    marginTop: 1
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 60,
    marginLeft: -420,
    marginTop: 6
  }
});

export default MaterialIconButtonsFooter;
