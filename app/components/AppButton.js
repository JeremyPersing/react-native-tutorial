import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

// Pass the words that go on the button as a child
// implemented as such: <Button>Hello</Button>
function AppButton(props) {
  return (
    // Overrride the
    <TouchableOpacity style={[styles.button, { backgroundColor: props.color }]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppButton;
