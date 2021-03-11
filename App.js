import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Image } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import colors from "./app/config/colors";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"; //Still need to allow for props
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const imageUris = [
    {
      uri:
        "file:///var/mobile/Containers/Data/Application/0AD91BCA-5EEC-4D17-B8CF-45B65285461D/Library/Caches/ExponentExperienceData/%2540jeremypersing%252FDoneWithIt/ImagePicker/81BECC34-3408-4DB8-96C1-57829851D759.jpg",
    },
    {
      uri:
        "file:///var/mobile/Containers/Data/Application/0AD91BCA-5EEC-4D17-B8CF-45B65285461D/Library/Caches/ExponentExperienceData/%2540jeremypersing%252FDoneWithIt/ImagePicker/D85231B7-3087-499E-A74C-FC8AFB866FCB.jpg",
    },
    {
      uri:
        "file:///var/mobile/Containers/Data/Application/0AD91BCA-5EEC-4D17-B8CF-45B65285461D/Library/Caches/ExponentExperienceData/%2540jeremypersing%252FDoneWithIt/ImagePicker/884806D1-AC10-4696-8A8A-CBA5F06B6E67.jpg",
    },
  ];
  return (
    <Screen>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      ></ImageInput>
    </Screen>
  );
}
