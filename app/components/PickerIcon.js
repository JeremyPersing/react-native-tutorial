import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import Icon from "./Icon";

function PickerIcon({ backgroundColor, icon, label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon bgColor={backgroundColor} name={icon} size={60}></Icon>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
});

export default PickerIcon;
