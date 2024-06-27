import React from "react";
import { SafeAreaView, Text } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { Container } from "../components";

const Home = () => (
  <SafeAreaView>
    <Text>Welcome to Home</Text>
  </SafeAreaView>
);

const Doctor = () => (
  <SafeAreaView>
    <Text>Welcome to Doctor Portal</Text>
  </SafeAreaView>
);

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
    home: Home,
    doctor: Doctor,
    setting: Setting,
  });
  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default DashboardScreen;
