import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import colors from "./app/config/colors";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"; //Still need to allow for props
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
/*
    <ListingDetailsScreen
      title="Red jacket for sale!"
      subTitle="$100"
      itemImage={require("./app/assets/jacket.jpg")}
    ></ListingDetailsScreen>

    <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      ></Card>
      <Card
        title="Red jacket for sale!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      ></Card>
    */

export default function App() {
  return <AccountScreen></AccountScreen>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.medium,
  },
});
