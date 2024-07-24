import React from "react";
import { Text } from "react-native";

const BloodTestListScreen = ({ route }: any) => {
  const { userId } = route.params;
  return (
    <>
      <Text>Hello Blood Test List Screen {userId}</Text>
    </>
  );
};

export default BloodTestListScreen;
