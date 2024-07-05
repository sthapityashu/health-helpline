import { createStackNavigator } from "@react-navigation/stack";
import AppointmentScreen from "./AppointmentScreen";
import DoctorScreen from "./DoctorScreen";
import HospitalScreen from "./HospitalScreen";

const HospitalStack = createStackNavigator();

const HospitalStackScreen = () => {
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
          headerTitle: "Doctor",
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

export default HospitalStackScreen;
