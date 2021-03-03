import React from "react";
import { StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import AccountScreenItem from "../components/AccountScreenItem";
import colors from "../config/colors";

function MyAccountScreen(props) {
  return (
    <Screen>
      <ListItem
        title="Mosh Hamedari"
        subTitle="programmingwithmosh@gmail.com"
        image={require("../assets/mosh.jpg")}
        styles={{ left: 15 }}
      ></ListItem>
      <AccountScreenItem
        title="My Listings"
        color={colors.primary}
        iconName="format-list-bulleted"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MyAccountScreen;
