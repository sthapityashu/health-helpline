// Defaults
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen, DashboardScreen } from "./src/screens";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useReactQueryDevTools } from "@dev-plugins/react-query/build/useReactQueryDevTools";

// Hooks
import { TabBarProvider } from "@hooks/useTabBar";

// const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const queryClient = new QueryClient({});

export default function App() {
  useReactQueryDevTools(queryClient);
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <NavigationContainer>
          <TabBarProvider>
            <Stack.Navigator
              initialRouteName="StartScreen"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="StartScreen" component={StartScreen} />
              {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
              {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
              <Stack.Screen
                name="DashboardScreen"
                component={DashboardScreen}
              />
            </Stack.Navigator>
          </TabBarProvider>
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
}
