import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({ name, size, color, bgColor }) {
  return (
    <View style={[styles.icon, { backgroundColor: bgColor }]}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
  },
});

export default Icon;
