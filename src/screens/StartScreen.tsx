import React from "react";
import { Text, View } from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";

export default function StartScreen({ navigation }:any) {
 
  return (
    <>
      <View className="flex-1 items-center justify-center min-w-screen mx-auto">
        <Text className="text-2xl">Welcome to</Text>
        <Text className="text-2xl font-bold"> HEALTH HELPLINE</Text>
        <View className="bg-black rounded-full my-8">
          <IconButton
            icon="arrow-right"
            iconColor={MD3Colors.primary100}
            size={20}
            onPress={()=> navigation.navigate("LoginScreen")}
          />
        </View>
      </View>
    </>
  );
}
