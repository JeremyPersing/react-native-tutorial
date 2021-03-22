import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import colors from "./app/config/colors";
import { createStackNavigator } from "@react-navigation/stack";
import navigationTheme from "./app/navigation/navigationTheme";

const ListingDetailsScreenOne = () => (
  <ListingDetailsScreen
    title="Red jacket for sale"
    subTitle="$100"
    itemImage={require("./app/assets/jacket.jpg")}
  />
);

const ListingDetailsScreenTwo = () => (
  <ListingDetailsScreen
    title="Couch in great condition"
    subTitle="$1000"
    itemImage={require("./app/assets/couch.jpg")}
  />
);

const ListingStack = createStackNavigator();

const ListingNavigator = () => (
  <ListingStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <ListingStack.Screen name="Feed" component={ListingsScreen} />
    <ListingStack.Screen name="1" component={ListingDetailsScreenOne} />
    <ListingStack.Screen name="2" component={ListingDetailsScreenTwo} />
  </ListingStack.Navigator>
);

const AccountStack = createStackNavigator();

const AccountNavigator = () => (
  <AccountStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AccountStack.Screen name="Account" component={AccountScreen} />
    <AccountStack.Screen name="Messages" component={MessagesScreen} />
  </AccountStack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.primary,
    }}
  >
    <Tab.Screen
      name="Feed"
      component={ListingNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="New Listing" component={ListingEditScreen} />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="user" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

/*const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={ListingsScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);*/

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
