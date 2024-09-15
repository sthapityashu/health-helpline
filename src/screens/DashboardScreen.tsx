import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar, Avatar, BottomNavigation } from "react-native-paper";
import {
  useNavigationState,
  useIsFocused,
  getFocusedRouteNameFromRoute,
  useFocusEffect,
} from "@react-navigation/native";

import AntDesign from "@expo/vector-icons/AntDesign";
// Screens
import HomeScreen from "./HomeScreen";
import DoctorScreen from "./DoctorScreen";
import HospitalStackScreen from "./HospitalStackScreen";
import BloodTestStackScreen from "./BloodTestStackScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import CartScreen from "./CartScreen";
import { useTabBar } from "@hooks/useTabBar";
import Container from "@components/Container";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#01B9EB",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "left",
        headerRight: () => (
          <Container>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Ionicons name="person-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </Container>
        ),
        headerLeft: () => (
          <Container>
            <Text
              style={{ color: "#fff", fontSize: 14, fontWeight: "semibold" }}
            >
              Welcome to
            </Text>
            <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
              Health Helpline
            </Text>
          </Container>
        ),
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "" }}
      />
      {/* Add other screens if needed */}
    </Stack.Navigator>
  );
};

const DashboardScreen = ({ navigation, route }: any) => {
  // const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  const { hideTabBar, setHideTabBar } = useTabBar();

  console.log("HideTabBar", hideTabBar);
  useFocusEffect(
    React.useCallback(() => {
      // Reset tab bar visibility when navigating back to the Home tab
      setHideTabBar(false);
    }, [setHideTabBar])
  );

  return (
    <>
      <Tab.Navigator
        activeColor="#01B9EB"
        inactiveColor="gray"
        // barStyle={{ backgroundColor: "blue" }}
        shifting={true}
        screenOptions={({ route }: any) => ({
          tabBarIcon: ({ focused, color }: any) => {
            let iconName;
            let IconComponent: any;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
              IconComponent = Ionicons;
            } else if (route.name === "Hospitals") {
              iconName = focused ? "hospital-box" : "hospital-box-outline";
              IconComponent = MaterialCommunityIcons;
            } else if (route.name === "Blood Test") {
              iconName = focused ? "test-tube" : "test-tube-empty";
              IconComponent = MaterialCommunityIcons;
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
              IconComponent = Ionicons;
            }

            return <IconComponent name={iconName} size={24} color={color} />;
          },
        })}
        barStyle={{ display: hideTabBar ? "none" : "flex" }}
        keyboardHidesNavigationBar
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Hospitals" component={HospitalStackScreen} />
        <Tab.Screen name="Blood Test" component={BloodTestStackScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </>
  );
};

export default DashboardScreen;
