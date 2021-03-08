import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../../config/colors";
import AppText from "../AppText";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevrons,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image}></Image>}
          <View style={styles.textContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <View style={styles.chevronContainer}>
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                color={colors.medium}
              />
            </View>
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  chevronContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
    top: 5,
    fontSize: 15,
  },
});

export default ListItem;
