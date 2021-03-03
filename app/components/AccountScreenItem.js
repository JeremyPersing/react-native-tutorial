import React from "react";
import { TouchableHighlight, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
import Icon from "./Icon";

function AccountScreenOption({
  title,
  iconName,
  iconColor,
  iconBackgroundColor,
}) {
  return (
    <TouchableHighlight
      underlayColor={colors.light}
      onPress={() => console.log()}
    >
      <View style={styles.container}>
        <Icon
          name={iconName}
          size={24}
          color={iconColor}
          bgColor={iconBackgroundColor}
        ></Icon>
        <AppText style={styles.text}>{title}</AppText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.white,
  },
  text: {
    fontWeight: "500",
  },
});

export default AccountScreenOption;
