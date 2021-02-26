import React from "react";

import { ImageBackground, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 0.25,
        }}
      >
        <View
          style={{
            backgroundColor: "#fc5c65",
            width: 75,
            height: 75,
            left: 20,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#4ECDC4",
            width: 75,
            height: 75,
            right: 20,
          }}
        ></View>
      </View>
      <ImageBackground
        source={require("./assets/chair.jpg")}
        style={{ flex: 0.6, resizeMode: "contain" }}
      ></ImageBackground>
      <View style={{ flex: 0.15 }}></View>
    </View>
  );
}
