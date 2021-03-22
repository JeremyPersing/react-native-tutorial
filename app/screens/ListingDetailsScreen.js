import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import { ListItem } from "../components/lists";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image source={listing.image} style={styles.image}></Image>
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
      </View>
      <View style={{ marginTop: 30 }}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subTitle="5 Listings"
        ></ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    justifyContent: "flex-start",
    height: 300,
    width: "100%",
  },
  titleContainer: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
  },
  price: {
    color: colors.secondary,
    top: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ListingDetailsScreen;
