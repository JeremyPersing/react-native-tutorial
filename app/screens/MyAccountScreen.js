import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import AccountScreenItem from "../components/AccountScreenItem";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";

const options = [
  {
    id: 1,
    title: "My Listings",
    color: colors.white,
    bgColor: colors.primary,
    iconName: "format-list-bulleted",
  },
  {
    id: 2,
    title: "My Messages",
    color: colors.white,
    bgColor: colors.secondary,
    iconName: "email",
  },
];

function MyAccountScreen() {
  return (
    <Screen style={styles.fullContainer}>
      <View style={styles.topContainer}>
        <ListItem
          title="Mosh Hamedari"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>
      <View style={styles.middleContainer}>
        <FlatList
          data={options}
          keyExtractor={(option) => option.id}
          renderItem={({ item }) => (
            <AccountScreenItem
              title={item.title}
              iconName={item.iconName}
              iconColor={item.color}
              iconBackgroundColor={item.bgColor}
            ></AccountScreenItem>
          )}
          ItemSeparatorComponent={ListItemSeparator}
        ></FlatList>
      </View>
      <AccountScreenItem
        title="Log Out"
        iconName="logout"
        iconColor={colors.white}
        iconBackgroundColor={colors.warning}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    backgroundColor: colors.light,
  },
  topContainer: {
    marginBottom: 30,
  },
  middleContainer: {
    marginBottom: 15,
  },
  text: {
    fontSize: 10,
  },
});

export default MyAccountScreen;
