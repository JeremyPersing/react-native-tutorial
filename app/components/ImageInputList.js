import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ImageInput from "./ImageInput";

function ImageInputList({ imageUris, onAddImage, onDeleteImage }) {
  return (
    <FlatList
      data={imageUris}
      keyExtractor={(item) => item.uri}
      horizontal={true}
      style={styles.container}
      render={(item) => (
        <ImageInput imageUri={item.imageUri} onChangeImage={onAddImage} />
      )}
    ></FlatList>
  );
}
const styles = StyleSheet.create({
  container: {},
});

export default ImageInputList;
