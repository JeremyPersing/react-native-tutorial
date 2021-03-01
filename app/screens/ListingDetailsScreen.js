import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

function ListingDetailsScreen({
  title,
  subTitle,
  itemImage,
  userImage,
  userName,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.listingContainer}>
        <Image source={itemImage} style={styles.image}></Image>
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
      <View style={styles.userContainer}>
        <Image source={userImage} style={styles.userImage}></Image>
        <View style={styles.userTextContainer}>
          <Text>{userName}</Text>
          <Text style={styles.userListings}>5 Listings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listingContainer: {
    flex: 0.5,
  },
  userContainer: {
    height: "10%",
    flexDirection: "row",
  },
  userImage: {
    height: 100,
    width: 100,
    left: 15,
    borderRadius: 50,
  },
  userTextContainer: {
    left: 30,
    top: 5,
  },
  userListings: {
    color: "grey",
    top: 10,
  },

  image: {
    flex: 0.8,
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
  },
  titleContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  itemText: {
    fontFamily: "Arial",
    left: 20,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    top: 10,
  },
});

export default ListingDetailsScreen;
