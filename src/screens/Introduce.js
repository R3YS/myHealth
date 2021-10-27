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
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <View style={styles.textInputColumn}>
          <TextInput
            placeholder="What's your name?"
            style={styles.textInput}
          ></TextInput>
          <TextInput
            placeholder="How much do you currently weigh?"
            style={styles.textInput2}
          ></TextInput>
          <TextInput
            placeholder="How tall are you?"
            style={styles.textInput3}
          ></TextInput>
          <TextInput
            placeholder="When is your birthday? (optional)"
            style={styles.textInput4}
          ></TextInput>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("WelcomePage")}
            style={styles.button}
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
  image: {
    width: 744,
    height: 1162,
    marginTop: -67,
    marginLeft: -87
  },
  image_imageStyle: {},
  textInput: {
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
  textInput2: {
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
    marginTop: 25
  },
  textInput3: {
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
  textInput4: {
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
  button: {
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
  textInputColumn: {
    marginTop: 218,
    marginLeft: 106,
    marginRight: 313
  },
  introduceYourself: {
    fontFamily: "roboto-500",
    color: "#121212",
    fontSize: 36,
    textAlign: "center",
    flex: 1,
    marginBottom: 965,
    marginTop: -507,
    marginLeft: 82,
    marginRight: 292
  }
});

export default Introduce;
