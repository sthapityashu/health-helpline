import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
// import { StartScreen, LoginScreen, DashboardScreen } from "./src/screens";
import {
  StartScreen,
  LoginScreen,
  DashboardScreen,
  RegisterScreen,
  DoctorScreen,
  HomeScreen,
} from "./src/screens";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useReactQueryDevTools } from "@dev-plugins/react-query/build/useReactQueryDevTools";

import BloodTestStackScreen from "@screens/BloodTestStackScreen";
import HospitalStackScreen from "@screens/HospitalStackScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const queryClient = new QueryClient({});

export default function App() {
  useReactQueryDevTools(queryClient);
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          {/* <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          </Stack.Navigator> */}
          <Tab.Navigator
            activeColor="#01B9EB"
            inactiveColor="gray"
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
                }
                // You can return any component that you like here!
                return (
                  <IconComponent name={iconName} size={24} color={color} />
                );
              },
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Hospitals" component={HospitalStackScreen} />
            <Tab.Screen name="Blood Test" component={BloodTestStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
