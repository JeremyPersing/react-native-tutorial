import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function Icon({ name, size = 24, color = colors.white, bgColor }) {
  return (
    <View style={[styles.icon, { backgroundColor: bgColor }]}>
      <MaterialCommunityIcons
        name={name}
        size={size ? size : 24}
        color={color ? color : colors.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 100,
    padding: 15,
  },
});

export default Icon;
