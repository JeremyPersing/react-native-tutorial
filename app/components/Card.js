import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({
  image,
  title,
  subTitle,
  style,
  navigationDestination,
  ...otherProps
}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(`${navigationDestination}`)}
    >
      <View style={[styles.card, style]}>
        <Image source={image} style={styles.image}></Image>
        <View style={styles.titleContainer}>
          <AppText style={styles.title} {...otherProps}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} {...otherProps}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
