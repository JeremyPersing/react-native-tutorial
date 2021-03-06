import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import useAuth from "../auth/useAuth";
import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

const options = [
  {
    title: "My Listings",
    icon: {
      iconName: "format-list-bulleted",
      bgColor: colors.primary,
    },
  },
  {
    icon: {
      iconName: "email",
      bgColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
    title: "My Messages",
  },
];

function MyAccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.fullContainer}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={options}
          keyExtractor={(options) => options.title}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate(item.targetScreen)}
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
        onPress={() => logOut()}
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
