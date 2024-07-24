import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BloodTestListScreen from "./BloodTestListScreen";
import BloodTestScreen from "./BloodTestScreen";

const BloodTestStack = createStackNavigator();

const BloodTestStackScreen = () => {
  return (
    <BloodTestStack.Navigator
      initialRouteName="BloodTestScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <BloodTestStack.Screen name="BloodTestScreen" component={BloodTestScreen} />
      <BloodTestStack.Screen
        name="BloodTestListScreen"
        component={BloodTestListScreen}
      />
    </BloodTestStack.Navigator>
  );
};

export default BloodTestStackScreen;
