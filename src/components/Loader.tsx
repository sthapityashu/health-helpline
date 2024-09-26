import { View, ActivityIndicator } from "react-native";
import React from "react";

export default function Loader() {
  return (
    <View className="flex items-center justify-center min-w-screen mx-auto">
      <ActivityIndicator size="large" color="#01B9EB" />
    </View>
  );
}
