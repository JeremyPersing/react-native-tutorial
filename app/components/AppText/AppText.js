import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

import styles from "./styles";

//props w/out the {}
function AppText({ children }) {
  //props.children
  return <Text style={styles.text}>{children}</Text>;
}

export default AppText;
