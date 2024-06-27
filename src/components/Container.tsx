import React, { Children } from "react";
import { View } from "react-native";

const Container = (props: any) => {
  const { children } = props;
  return <View className="w-full px-10">{children}</View>;
};

export default Container;
