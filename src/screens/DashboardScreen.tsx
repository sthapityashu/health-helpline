// Defaults
import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

// Screens
import HospitalStackScreen from "./HospitalStackScreen";
import BloodTestStackScreen from "./BloodTestStackScreen";
import CartStackScreen from "./CartStackScreen";
import HomeStackScreen from "./HomeStackScreen";

// Hooks
import { useTabBar } from "context/useTabBar";

// Components
import { useCart } from "@context/useCart";

// Navigation Context
const Tab = createMaterialBottomTabNavigator();

const DashboardScreen = ({ navigation, route }: any) => {
  // const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  // Context
  const { hideTabBar, setHideTabBar } = useTabBar();
  const { cartItems } = useCart();

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
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Hospitals" component={HospitalStackScreen} />
        <Tab.Screen name="Blood Test" component={BloodTestStackScreen} />
        <Tab.Screen
          name="Cart"
          component={CartStackScreen}
          options={{ tabBarBadge: cartItems?.length }}
        />
      </Tab.Navigator>
    </>
  );
};

export default DashboardScreen;
