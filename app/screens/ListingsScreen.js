import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

function ListingsScreen({ navigation }) {
  const listingItems = [
    {
      id: 1,
      image: require("../assets/jacket.jpg"),
      title: "Red jacket for sale",
      price: 100,
    },
    {
      id: 2,
      image: require("../assets/couch.jpg"),
      title: "Couch in great condition",
      price: 1000,
    },
  ];

  return (
    <Screen style={styles.container}>
      <FlatList
        data={listingItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={"$" + item.price}
            style={styles.card}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            numberOfLines={1}
          ></Card>
        )}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 20,
  },
  card: {
    marginVertical: 10,
  },
});

export default ListingsScreen;
