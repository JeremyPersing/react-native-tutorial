import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import colors from "../config/colors";
import MessagesScreen from "./MessagesScreen";
import ListingDetailsScreen from "./ListingDetailsScreen";

const options = [
  {
    title: "My Listings",
    icon: {
      iconName: "format-list-bulleted",
      bgColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      iconName: "email",
      bgColor: colors.secondary,
    },
  },
];

function MyAccountScreen() {
  return (
    <Screen style={styles.fullContainer}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedari"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={options}
          keyExtractor={(options) => options.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.iconName} bgColor={item.icon.bgColor} />
              }
            ></ListItem>
          )}
          ItemSeparatorComponent={ListItemSeparator}
        ></FlatList>
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" bgColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 30,
  },
});

export default MyAccountScreen;
