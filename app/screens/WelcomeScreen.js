import React from "react";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";

import colors from "../config/colors";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      {/* View container holding the logo and the text */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <Text>Sell What You Don't Need</Text>
      </View>
      {/* View container holding the two colors */}
      <View style={styles.buttonContainer}>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logoContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 125,
    width: 125,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
