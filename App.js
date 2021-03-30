import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppPopdown from "./app/components/AppPopdown";

export default function App() {
  const netInfo = useNetInfo();
  console.log(!netInfo.isInternetReachable);
  return (
    <NavigationContainer theme={navigationTheme}>
      {!netInfo.isInternetReachable ? (
        <AppPopdown>No Internet Connection</AppPopdown>
      ) : (
        <View></View>
      )}
      <AppNavigator />
    </NavigationContainer>
  );
}
