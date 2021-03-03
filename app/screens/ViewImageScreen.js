import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="close"
          size={40}
          color={colors.white}
          style={styles.closeIcon}
        ></MaterialCommunityIcons>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={40}
          color={colors.white}
          style={styles.deleteIcon}
        ></MaterialCommunityIcons>
      </View>
      <ImageBackground
        source={require("../assets/chair.jpg")}
        style={styles.image}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 70,
  },
  closeIcon: {
    left: 20,
  },
  deleteIcon: {
    right: 20,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 600,
  },
});

export default ViewImageScreen;
