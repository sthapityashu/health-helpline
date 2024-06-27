import React from "react";
import { Text, View, Image } from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";

export default function StartScreen({ navigation }: any) {
  return (
    <>
      <View className="flex-1 items-center justify-center min-w-screen mx-auto">
        <Text className="text-2xl text-[#01B9EB]">Welcome to</Text>
        <Image
          width={500}
          height={100}
          source={require("../assets/logo.png")}
        />
        <View className="bg-[#01B9EB] rounded-full my-6">
          <IconButton
            icon="arrow-right"
            iconColor={MD3Colors.secondary95}
            size={20}
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </View>
      </View>
    </>
  );
}
