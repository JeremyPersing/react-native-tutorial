import React from "react";
// SafeAreaView ensures there will be padding at the top
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("./assets/background.jpg")}
      style={{ flex: 1 }}
    >
      {/* View container holding the logo and the text */}
      <View
        style={{
          flex: 0.8,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/logo-red.png")}
          style={{
            height: 125,
            width: 125,
          }}
        ></Image>
        <Text>Sell What You Don't Need</Text>
      </View>
      {/* View container holding the two colors */}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: "#fc5c65",
            flex: 0.15,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#4ECDC4",
            flex: 0.15,
          }}
        ></View>
      </View>
    </ImageBackground>
  );
}
