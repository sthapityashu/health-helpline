import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar, Avatar, BottomNavigation } from "react-native-paper";
import { useNavigationState, useIsFocused } from "@react-navigation/native";

// Screens
import HomeScreen from "./HomeScreen";
import DoctorScreen from "./DoctorScreen";
import HospitalStackScreen from "./HospitalStackScreen";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import BloodTestStackScreen from "./BloodTestStackScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

const DashboardScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);

  const routes = [
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    // {
    //   key: "doctor",
    //   title: "Doctor",
    //   focusedIcon: "account",
    //   unfocusedIcon: "account-outline",
    // },
    {
      key: "hospital",
      title: "Hospital",
      focusedIcon: "home-city",
      unfocusedIcon: "home-city-outline",
    },
    // {
    //   key: "appointment",
    //   title: "Appointment",
    //   focusedIcon: "calendar-check",
    //   unfocusedIcon: "calendar-blank",
    // },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    // doctor: DoctorScreen,
    hospital: HospitalStackScreen,
    // appointment: AppointmentScreen,
  });

  const currentTitle = routes[index].title;

  return (
    <>
      {isNavBarVisible && (
        <>
          {index !== 0 ? (
            <Appbar.Header className="px-6 bg-[#01B9EB] flex-row items-center justify-between">
              <View className="flex-col items-start">
                <Text className="text-xl font-bold text-white">
                  {currentTitle}
                </Text>
              </View>
            </Appbar.Header>
          ) : (
            <Appbar.Header className="px-6 bg-[#01B9EB] flex-row items-center justify-between">
              <View className="flex-col items-start">
                <Text className="text-xl font-bold text-white">Hi, Yashu</Text>
                <Text className="text-xs text-white">How are you?</Text>
              </View>
              {/* <TouchableOpacity onPress={() => alert("Profile Clicked")}>
                <Avatar.Image
                  source={{
                    uri: "https://media.licdn.com/dms/image/D4D03AQEzximBza-Klw/profile-displayphoto-shrink_200_200/0/1718525400486?e=2147483647&v=beta&t=h_Tk6sQ-1G-4XzV6VeyG6X5LQslqWLq-ShnoKaLNaoE",
                  }}
                  size={40}
                  className="ml-auto bg-white text-black"
                />
              </TouchableOpacity> */}
            </Appbar.Header>
          )}
        </>
      )}
      {/* 
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={false}
      /> */}

      <Tab.Navigator
        activeColor="#01B9EB"
        inactiveColor="gray"
        // barStyle={{ backgroundColor: "blue" }}
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
            return <IconComponent name={iconName} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* <Tab.Screen name="Doctor" component={DoctorScreen} /> */}
        <Tab.Screen name="Hospitals" component={HospitalStackScreen} />
        <Tab.Screen name="Blood Test" component={BloodTestStackScreen} />
      </Tab.Navigator>
    </>
  );
};

export default DashboardScreen;
