import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

import defaultStyles from "../config/styles";

// Pass the words that go on the button as a child
// implemented as such: <Button>Hello</Button>
function AppButton({ color, title, ...otherProps }) {
  return (
    <TouchableOpacity
      style={[styles.button, color && { backgroundColor: color }]}
      {...otherProps}
    >
      <View style={styles.textContainer}>
        <AppText style={[defaultStyles.text, styles.text]}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.primary,
    borderRadius: 50,
    height: 50,
    marginVertical: 10,
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: defaultStyles.colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AppButton;
