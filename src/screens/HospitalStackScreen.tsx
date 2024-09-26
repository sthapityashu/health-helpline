// Defaults
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

// Screens
import AppointmentScreen from "./AppointmentScreen";
import DoctorScreen from "./DoctorScreen";
import HospitalScreen from "./HospitalScreen";

// Hooks
import { useTabBar } from "context/useTabBar";
import Container from "@components/Container";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Navigation context
const HospitalStack = createStackNavigator();

const HospitalStackScreen = ({ route }: any) => {
  // Get the currrent route name
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  // Context
  const { setHideTabBar } = useTabBar();

  useEffect(() => {
    if (routeName !== "Home") {
      setHideTabBar(true);
    }
    if (routeName === "Hospital") {
      setHideTabBar(false);
    }

    // Show the tab bar again when leaving this stack
    return () => setHideTabBar(false);
  }, [setHideTabBar, routeName]);

  return (
    <HospitalStack.Navigator
      initialRouteName="HospitalScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <HospitalStack.Screen
        name="Hospital"
        component={HospitalScreen}
        options={{
          headerShown: true,
          headerTitle: "Hospitals",
          headerTintColor: "white",
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: "#01B9EB",
          },
        }}
      />
      <HospitalStack.Screen
        name="DoctorScreen"
        component={DoctorScreen}
        options={{
          headerShown: true,
          headerTitle: "Doctor",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#01B9EB",
          },
        }}
      />
      <HospitalStack.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={{
          headerShown: true,
          headerTitle: "Book an appointment",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#01B9EB",
          },
        }}
      />
    </HospitalStack.Navigator>
  );
};

export default HospitalStackScreen;
