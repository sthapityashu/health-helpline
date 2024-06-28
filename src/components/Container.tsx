import React, { Children } from "react";
import { SafeAreaView, View } from "react-native";

const Container = (props: any) => {
  const { children } = props;
  return (
    <SafeAreaView>
      <View className="w-full px-6">{children}</View>
      {/* {children} */}
    </SafeAreaView>
  );
};

export default Container;
