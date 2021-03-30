import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import colors from "../config/colors";

import AppText from "./AppText";

function AppPopdown({ children }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AppText style={styles.text}>{children}</AppText>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
  },
  text: {
    alignSelf: "center",
    color: colors.white,
  },
});

export default AppPopdown;
