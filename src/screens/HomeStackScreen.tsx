import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Easing,
  Dimensions,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import Container from "@components/Container";
import { LoginScreen } from ".";

const Stack = createStackNavigator();
const screenWidth = Dimensions.get("window").width; // Get screen width

const HomeStackScreen = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(screenWidth)).current; // Starts off-screen (right)

  // Function to handle the sliding animation
  const toggleLoginPanel = () => {
    if (isLoginVisible) {
      // Slide out to the right
      Animated.timing(slideAnim, {
        toValue: screenWidth, // Move the panel off the right side
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => setLoginVisible(false)); // Set visibility to false after the animation
    } else {
      // Slide in from the right
      setLoginVisible(true); // Set visibility to true before the animation starts
      Animated.timing(slideAnim, {
        toValue: 0, // Bring the panel onto the screen
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <>
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
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={toggleLoginPanel}
              >
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
                Health Helpline{"  "}
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

      {/* Sliding Login Panel */}

      {isLoginVisible && (
        <LoginScreen
          slideAnim={slideAnim}
          toggleLoginPanel={toggleLoginPanel}
        />
      )}
    </>
  );
};

export default HomeStackScreen;
