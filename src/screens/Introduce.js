import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

function Introduce(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="contain"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <View style={styles.nameColumn}>
          <TextInput
            placeholder="What's your name?"
            dataDetector="none"
            style={styles.name}
          ></TextInput>
          <TextInput
            placeholder="How much do you currently weigh?"
            style={styles.weight}
          ></TextInput>
          <TextInput
            placeholder="How tall are you?"
            style={styles.howtall}
          ></TextInput>
          <TextInput
            placeholder="When is your birthday? (optional)"
            style={styles.birthday}
          ></TextInput>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("WelcomePage")}
            style={styles.nextbutton}
          >
            <Text style={styles.next}>Next</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.introduceYourself}>Introduce Yourself</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15
  },
  background: {
    width: 744,
    height: 1162,
    marginTop: -67,
    marginLeft: -87
  },
  background_imageStyle: {},
  name: {
    fontFamily: "roboto-500",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderWidth: 3,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRadius: 15,
    height: 72,
    width: 322
  },
  weight: {
    fontFamily: "roboto-500",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    width: 322,
    height: 72,
    alignSelf: "flex-end",
    marginTop: 26
  },
  howtall: {
    fontFamily: "roboto-500",
    color: "#121212",
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    height: 72,
    width: 322,
    marginTop: 19
  },
  birthday: {
    fontFamily: "roboto-500",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    fontSize: 16,
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 15,
    height: 72,
    width: 322,
    backgroundColor: "rgba(255,255,255,0.7)",
    marginTop: 16,
    marginLeft: 3
  },
  nextbutton: {
    backgroundColor: "rgba(0,0,0,0.7)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    width: 322,
    height: 72,
    marginTop: 14
  },
  next: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    height: 27,
    width: 41,
    marginTop: 23,
    marginLeft: 143
  },
  nameColumn: {
    marginTop: 217,
    marginLeft: 106,
    marginRight: 313
  },
  introduceYourself: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 36,
    textAlign: "center",
    flex: 1,
    marginBottom: 945,
    marginTop: -507,
    marginLeft: 82,
    marginRight: 292
  }
});

export default Introduce;
