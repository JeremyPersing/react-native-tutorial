import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

import colors from "../config/colors";

//props w/out the {}
function AppText({ children, style }) {
  //props.children
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    flexShrink: 2,
  },
});
export default AppText;
