import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function ListingItem({ userImage, userName }) {
  return (
    <View>
      <View style={styles.container}>
        <Image source={userImage} style={styles.image}></Image>
        <View style={styles.textContainer}>
          <AppText>{userName}</AppText>
          <AppText style={styles.listings}>5 Listings</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    height: 100,
    width: 100,
    left: 15,
    borderRadius: 50,
  },
  textContainer: {
    paddingLeft: 30,
    paddingTop: 5,
  },
  listings: {
    color: colors.gray,
    top: 10,
  },
});

export default ListingItem;
