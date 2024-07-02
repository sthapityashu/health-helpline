// Defaults
import React from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar, Avatar, BottomNavigation, Drawer } from "react-native-paper";

// Components
import { Container } from "../components";

// Screens
import HomeScreen from "./HomeScreen";
import DoctorScreen from "./DoctorScreen";
import HospitalScreen from "./HospitalScreen";
import AppointmentScreen from "./AppointmentScreen";

const Setting = () => (
  <SafeAreaView>
    <Text>Settings Page</Text>
  </SafeAreaView>
);

const HospitalStack = createStackNavigator();

const HospitalStackScreen = ({ navigation }: any) => {
  return (
    <HospitalStack.Navigator
      initialRouteName="HospitalScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <HospitalStack.Screen name="Hospital" component={HospitalScreen} />
      <HospitalStack.Screen
        name="DoctorScreen"
        component={DoctorScreen}
        options={{
          headerShown: true,
          headerTitle: "Doctors",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#01B9EB",
          },
        }}
      />
      <HospitalStack.Screen
        name="AppointmentScreen"
        component={AppointmentScreen}
        options={{
          headerShown: true,
          headerTitle: "Book an appointment",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#01B9EB",
          },
        }}
      />
    </HospitalStack.Navigator>
  );
};

const DashboardScreen = ({ navigation, route }: any) => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "doctor",
      title: "Doctor",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
    {
      key: "hospital",
      title: "Hospital",
      focusedIcon: "home-city",
      unfocusedIcon: "home-city-outline",
    },
    {
      key: "appointment",
      title: "Appointment",
      focusedIcon: "calendar-check",
      unfocusedIcon: "calendar-blank",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    doctor: DoctorScreen,
    hospital: HospitalStackScreen,
    appointment: AppointmentScreen,
  });

  const handleProfile = () => {
    // const [active, setActive] = React.useState("");

    return (
      <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          // active={active === "first"}
          onPress={() => alert("Hello")}
        />
        {/* <Drawer.Item
          label="Second Item"
          active={active === "second"}
          onPress={() => setActive("second")}
        /> */}
      </Drawer.Section>
    );
  };
  return (
    <>
      {/* <Appbar.Header className="px-6 bg-[#01B9EB] flex-row items-center justify-between">
        <View className="flex-col items-start">
          <Text className="text-xl font-bold text-white">Hi, Yashu</Text>
          <Text className="text-xs text-white">How are you?</Text>
        </View>
        <TouchableOpacity onPress={handleProfile}>
          <Avatar.Image
            source={{
              uri: "https://media.licdn.com/dms/image/D4D03AQEzximBza-Klw/profile-displayphoto-shrink_200_200/0/1718525400486?e=2147483647&v=beta&t=h_Tk6sQ-1G-4XzV6VeyG6X5LQslqWLq-ShnoKaLNaoE",
            }}
            size={40}
            // icon="account"
            className="ml-auto bg-white text-black"
          />
        </TouchableOpacity>
      </Appbar.Header> */}

      {index !== 0 ? (
        <></>
      ) : (
        <Appbar.Header className="px-6 bg-[#01B9EB] flex-row items-center justify-between">
          <>
            <View className="flex-col items-start">
              <Text className="text-xl font-bold text-white">Hi, Yashu</Text>
              <Text className="text-xs text-white">How are you?</Text>
            </View>
            <TouchableOpacity onPress={handleProfile}>
              <Avatar.Image
                source={{
                  uri: "https://media.licdn.com/dms/image/D4D03AQEzximBza-Klw/profile-displayphoto-shrink_200_200/0/1718525400486?e=2147483647&v=beta&t=h_Tk6sQ-1G-4XzV6VeyG6X5LQslqWLq-ShnoKaLNaoE",
                }}
                size={40}
                className="ml-auto bg-white text-black"
              />
            </TouchableOpacity>
          </>
        </Appbar.Header>
      )}

      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default DashboardScreen;
