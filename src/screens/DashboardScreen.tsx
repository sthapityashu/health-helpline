import React from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Appbar, Avatar, BottomNavigation } from "react-native-paper";
import { Container } from "../components";
import HomeScreen from "./HomeScreen";
import DoctorScreen from "./DoctorScreen";

const Setting = () => (
  <SafeAreaView>
    <Text>Settings Page</Text>
  </SafeAreaView>
);

const DashboardScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "doctor",
      title: "Doctor",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
    {
      key: "setting",
      title: "Setting",
      focusedIcon: "archive-settings",
      unfocusedIcon: "archive-settings-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    doctor: DoctorScreen,
    setting: Setting,
  });

  const handleProfile = () => alert("Profile Clicked");
  return (
    <>
      <Appbar.Header className="px-6 bg-[#01B9EB] flex-row items-center justify-between">
        <View className="flex-col items-start">
          <Text className="text-xl font-bold text-white">Hi, Yashu</Text>
          <Text className="text-xs text-white">How are you?</Text>
        </View>
        <TouchableOpacity onPress={handleProfile}>
          <Avatar.Icon
            size={40}
            icon="account"
            className="ml-auto bg-white text-black"
          />
        </TouchableOpacity>
      </Appbar.Header>

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default DashboardScreen;
