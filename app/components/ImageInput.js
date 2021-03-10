import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  // Select the image
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        console.log("Be selecting image uri " + result.uri);
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error occurred", error);
    }
  };

  return (
    <View style={styles.container} onTouchStart={selectImage}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image}></Image>
      ) : (
        <MaterialCommunityIcons
          name="camera"
          color={colors.medium}
          size={60}
          style={styles.camera}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 20,
    height: 100,
    justifyContent: "center",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
});

export default ImageInput;
