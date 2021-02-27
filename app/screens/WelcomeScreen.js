import React from "react";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={5}
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
        <View style={styles.loginButton}>
          <AppButton color={colors.primary}>LOGIN</AppButton>
        </View>
        <View style={styles.registerButton}>
          <AppButton color={colors.secondary}>REGISTER</AppButton>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 30,
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
    width: "90%",
    height: 70,
  },
  registerButton: {
    width: "90%",
    height: 70,
  },
});

export default WelcomeScreen;
