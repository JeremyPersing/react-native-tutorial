import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={8}
    >
      <Image
        source={require("../assets/logo-red.png")}
        style={styles.logo}
      ></Image>
      <AppText style={styles.logoText}>Sell What You Don't Need</AppText>
      <View style={styles.buttonContainer}>
        <AppButton
          color={colors.primary}
          navigationDestination="Login"
          title="LOGIN"
        />
        <AppButton
          color={colors.secondary}
          navigationDestination="Register"
          title="REGISTER"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    resizeMode: "cover",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    width: "90%",
    marginBottom: 20,
  },
  logo: {
    alignSelf: "center",
    height: 100,
    marginTop: 75,
    width: 100,
  },
  logoText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
  },
});

export default WelcomeScreen;
