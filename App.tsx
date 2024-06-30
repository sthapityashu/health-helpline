import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { StartScreen, LoginScreen, DashboardScreen } from "./src/screens";
import {
  StartScreen,
  LoginScreen,
  DashboardScreen,
  RegisterScreen,
  DoctorScreen,
} from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="DoctorScreen" component={DoctorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
