import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function Card(props) {
  return (
    // Main white container
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            source={require("../assets/jacket.jpg")} //props.image}
            style={styles.image}
          ></Image>
          <View style={styles.titleContainer}>
            <Text style={[styles.text, styles.title]}>Red Jacket for Sale</Text>
            <Text style={[styles.text, styles.price]}>$100</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  cardContainer: {
    flex: 0.5,
    backgroundColor: "#f8f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    height: "75%",
    backgroundColor: "#fff",
    borderRadius: 30,
    top: 25,
  },
  image: {
    width: "100%",
    height: "75%",
  },
  titleContainer: {
    flex: 1,
  },
  text: {
    flex: 0.5,
    fontFamily: "Arial",
    fontSize: 15,
    left: 20,
  },
  title: {
    top: 15,
  },
  price: {
    color: colors.secondary,
  },
});

export default Card;
