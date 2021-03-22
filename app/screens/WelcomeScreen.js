import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import colors from "../config/colors";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
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
          title="LOGIN"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          color={colors.secondary}
          title="REGISTER"
          onPress={() => navigation.navigate(routes.REGISTER)}
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
