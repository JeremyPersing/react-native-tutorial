import React from "react";
import { StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";

function LoginScreen(props) {
  return (
    <Screen>
      <Image
        source={require("../assets/logo-red.png")}
        style={styles.logo}
      ></Image>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        secrureTextEntry
        textContentType="password"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
