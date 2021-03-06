import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";
// Allow for mutliple different cards on the same page and
// use Apptext on the rest of the screens

function Card({ image, title, subTitle, style }) {
  return (
    <View style={[styles.card, style]}>
      <Image source={image} style={styles.image}></Image>
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    paddingBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  titleContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
