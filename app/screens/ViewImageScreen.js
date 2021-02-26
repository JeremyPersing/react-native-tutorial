import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      </View>
      <ImageBackground
        source={require("../assets/chair.jpg")}
        style={styles.image}
      ></ImageBackground>
      <View style={styles.bottomContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 0.15,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    width: 75,
    height: 75,
    left: 20,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    width: 75,
    height: 75,
    right: 20,
  },
  image: {
    flex: 0.6,
    resizeMode: "contain",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.25,
  },
});

export default ViewImageScreen;
