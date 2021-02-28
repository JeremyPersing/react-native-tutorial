import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";

function ListingDetailsScreen({ cardComponent }) {
  return (
    <View style={styles.container}>
      <View style={styles.listingContainer}>
        <Image
          source={require("../assets/jacket.jpg")}
          style={styles.image}
        ></Image>
        <View style={styles.textContainer}>
          <Text style={[styles.itemText, styles.itemTitle]}>
            Red jacket for sale
          </Text>
          <Text style={[styles.itemText, styles.itemPrice]}>$100</Text>
        </View>
      </View>
      <View style={styles.userContainer}>
        <Image
          source={require("../assets/mosh.jpg")}
          style={styles.userImage}
        ></Image>
        <View style={styles.userTextContainer}>
          <Text style={[styles.userText]}>Mosh Hamedani</Text>
          <Text style={[styles.userText, styles.userListings]}>5 Listings</Text>
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
  userText: {
    fontSize: 15,
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
    flex: 0.2,
  },
  itemText: {
    fontFamily: "Arial",
    left: 20,
  },
  itemTitle: {
    top: 15,
    fontSize: 18,
  },
  itemPrice: {
    top: 30,
    color: colors.secondary,
    fontSize: 15,
  },
});

export default ListingDetailsScreen;
