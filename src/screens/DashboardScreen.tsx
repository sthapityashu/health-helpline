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

const Tab = createMaterialBottomTabNavigator();

const DashboardScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);

  // const routes = [
  //   {
  //     key: "home",
  //     title: "Home",
  //     focusedIcon: "home",
  //     unfocusedIcon: "home-outline",
  //   },
  //   {
  //     key: "doctor",
  //     title: "Doctor",
  //     focusedIcon: "account",
  //     unfocusedIcon: "account-outline",
  //   },
  //   {
  //     key: "hospital",
  //     title: "Hospital",
  //     focusedIcon: "home-city",
  //     unfocusedIcon: "home-city-outline",
  //   },
  //   {
  //     key: "appointment",
  //     title: "Appointment",
  //     focusedIcon: "calendar-check",
  //     unfocusedIcon: "calendar-blank",
  //   },
  // ];

  // const renderScene = BottomNavigation.SceneMap({
  //   home: HomeScreen,
  //   doctor: DoctorScreen,
  //   hospital: HospitalStackScreen,
  //   appointment: AppointmentScreen,
  // });

  // const currentTitle = routes[index].title;

  // Get the current navigation state
  const navigationState: any = useNavigationState((state) => state);

  const getCurrentRouteName: any = (state: any) => {
    const route = state.routes[state.index];

    if (route.state) {
      return getCurrentRouteName(route.state);
    }
    return route.name;
  };

  // console.log(
  //   "getCurrentRouteName",
  //   navigationState?.routes[navigationState?.routes?.length - 1]?.state?.routes
  // );
  const currentRouteName = getCurrentRouteName(navigationState);

  useEffect(() => {
    const shouldHideNavBar =
      currentRouteName === "DoctorScreen" ||
      currentRouteName === "AppointmentScreen";
    setIsNavBarVisible(!shouldHideNavBar);
  }, [currentRouteName]);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  return (
    <>
      {isNavBarVisible && (
        <>
          {index !== 0 ? (
            <Appbar.Header className="px-6 bg-[#01B9EB] flex-row items-center justify-between">
              <View className="flex-col items-start">
                <Text className="text-xl font-bold text-white">
                  {/* {currentTitle} */}
                </Text>
              </View>
            </Appbar.Header>
          ) : (
            <Appbar.Header className="px-6 bg-[#01B9EB] flex-row items-center justify-between">
              <View className="flex-col items-start">
                <Text className="text-xl font-bold text-white">Hi, Yashu</Text>
                <Text className="text-xs text-white">How are you?</Text>
              </View>
              <TouchableOpacity onPress={() => alert("Profile Clicked")}>
                <Avatar.Image
                  source={{
                    uri: "https://media.licdn.com/dms/image/D4D03AQEzximBza-Klw/profile-displayphoto-shrink_200_200/0/1718525400486?e=2147483647&v=beta&t=h_Tk6sQ-1G-4XzV6VeyG6X5LQslqWLq-ShnoKaLNaoE",
                  }}
                  size={40}
                  className="ml-auto bg-white text-black"
                />
              </TouchableOpacity>
            </Appbar.Header>
          )}
        </>
      )}

      {/* <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={false}
        
      /> */}

      <Tab.Navigator
        activeColor="black"
        inactiveColor="gray"
        barStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar.Icon
                icon="home"
                size={30}
                color={color}
                className="bg-transparent"
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Doctor"
          component={DoctorScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar.Icon
                icon="doctor"
                size={30}
                color={color}
                className="bg-transparent"
              />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Hospitals"
          component={HospitalStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar.Icon
                icon="hospital-building"
                size={30}
                color={color}
                className="bg-transparent"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Blood Test"
          component={BloodTestStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar.Icon
                icon="test-tube"
                size={30}
                color={color}
                className="bg-transparent"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default DashboardScreen;
