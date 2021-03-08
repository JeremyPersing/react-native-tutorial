import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

//props w/out the {}
function AppText({ children, numberOfLines, style }) {
  //props.children
  return (
    <Text numberOfLines={numberOfLines} style={[defaultStyles.text, style]}>
      {children}
    </Text>
  );
}

export default AppText;
