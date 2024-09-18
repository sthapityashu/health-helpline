import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "./CartScreen";
import { useTabBar } from "@context/useTabBar";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const CartStack = createStackNavigator();

export default function CartStackScreen({ route }: any) {
  // Get the currrent route name
  const routeName = getFocusedRouteNameFromRoute(route) ?? "CartScreen";

  console.log("Screen", routeName);

  // Context
  const { setHideTabBar } = useTabBar();

  useEffect(() => {
    if (routeName === "CartScreen") {
      setHideTabBar(false);
    }
    return () => setHideTabBar(true);
  }, [setHideTabBar, routeName]);

  return (
    <CartStack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <CartStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: true,
          headerTitle: "Cart",
          headerTintColor: "white",
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: "#01B9EB",
          },
        }}
      />
    </CartStack.Navigator>
  );
}
