import React from "react";
import { View, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";


export const TextInput = ({ errorText, description, ...rest }: any) => {
  return (
    <View>
      <Input
        // style={styles.input}
        // selectionColor={theme.colors.primary}
        underlineColor="black"
        mode="outlined"
        {...rest}
      />
    </View>
  );
};
