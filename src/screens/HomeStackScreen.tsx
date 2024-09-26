import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Container from "@components/Container";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";

const Stack = createStackNavigator();

const HomeStackScreen = ({ route }: any) => {

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
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
