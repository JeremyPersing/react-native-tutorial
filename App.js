import { StatusBar } from "expo-status-bar";
import React from "react";
// SafeAreaView ensures there will be padding at the top
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
// View -> UIView
export default function App() {
  /*
  const handlePress = () => {
    console.log("Text has been pressed");
  };*/

  return (
    // View is like a div
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <Button
        color="dodgerblue"
        title="Click Me"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "yes", onPress: () => console.log("Yes") },
            { text: "no", onPress: () => console.log("No") },
          ])
        }
      />
      <TouchableHighlight
        onPress={() => {
          console.log("Image tapped");
        }}
      >
        <Image
          blurRadius={1}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

// Contains all the styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1, // Will grow flexibly to take up the entirety of the screen
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
