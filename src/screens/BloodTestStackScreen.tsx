// Defaults
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

// Screens
import BloodTestListScreen from "./BloodTestListScreen";
import BloodTestScreen from "./BloodTestScreen";

// Hooks
import { useTabBar } from "@context/useTabBar";
// import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, View } from "react-native";
import CartIconWithBadge from "@components/CartIconWithBadge";
import { useCart } from "@context/useCart";

const BloodTestStack = createStackNavigator();

const BloodTestStackScreen = ({ route }: any) => {
  // Get the currrent route name
  const routeName = getFocusedRouteNameFromRoute(route) ?? "BloodTestScreen";

  // Context
  const { setHideTabBar } = useTabBar();
  const { cartItems } = useCart();

  useEffect(() => {
    if (routeName === "BloodTestListScreen") {
      setHideTabBar(true);
    }
    if (routeName === "BloodTestScreen") {
      setHideTabBar(false);
    }
    return () => setHideTabBar(false);
  }, [setHideTabBar, routeName]);

  return (
    <BloodTestStack.Navigator
      initialRouteName="BloodTestScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <BloodTestStack.Screen
        name="BloodTestScreen"
        component={BloodTestScreen}
        options={{
          headerShown: true,
          headerTitle: "Lab Test",
          headerTintColor: "white",
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: "#01B9EB",
          },
        }}
      />
      <BloodTestStack.Screen
        name="BloodTestListScreen"
        component={BloodTestListScreen}
        options={({ route }: any) => ({
          headerShown: true,
          headerTitle: route?.params?.name, // Display the screen name
          headerTintColor: "white",
          headerRight: () => (
            <TouchableOpacity>
              <CartIconWithBadge cartCount={cartItems?.length} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#01B9EB",
          },
        })}
      />
    </BloodTestStack.Navigator>
  );
};

export default BloodTestStackScreen;
