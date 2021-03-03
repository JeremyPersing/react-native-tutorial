import React from "react";
import { TouchableHighlight, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

function AccountScreenOption({ title, color, iconName }) {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, { backgroundColor: color }]}>
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={colors.white}
        />
      </View>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
}

const iconSize = 48;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
  },
  icon: {
    borderRadius: 50,
    marginRight: 5,
    marginLeft: 10,
    padding: 3,
  },
});

export default AccountScreenOption;
