// Defaults
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDown from "react-native-paper-dropdown";
import { useMutation } from "@tanstack/react-query"; // Import useMutation from TanStack Query
import axios from "axios"; // Import axios for making HTTP requests

// Components
import { Container } from "../components";

const AppointmentScreen = ({ route, navigation }: any) => {
  // Routing
  const { clinicId, doctorId, departmentName, doctorName, profile } =
    route.params;

  // States
  const [hospitalTime, setHospitalTime] = useState("");
  const [date, setDate] = useState<any>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showHospitalDropdown, setShowHospitalDropdown] = useState(false);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const appointmentTime = [
    { label: "11:00 AM", value: "11" },
    { label: "12:00 PM", value: "12" },
    { label: "1:00 PM", value: "1" },
    { label: "2:00 PM", value: "2" },
    { label: "3:00 PM", value: "3" },
    { label: "4:00 PM", value: "4" },
    { label: "5:00 PM", value: "5" },
  ];

  const handleDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setHospitalTime("");
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (selectedTime: any) => {
    const currentTime = selectedTime;
    setHospitalTime(currentTime);
  };

  // Function to post appointment data to the API
  const postAppointmentData = async (appointmentDetails: any) => {
    const response = await axios.post(
      "https://api.example.com/appointments",
      appointmentDetails
    ); // Replace with your actual API endpoint
    return response.data;
  };

  // Use mutation to submit appointment data
  const mutation = useMutation({
    mutationFn: postAppointmentData, // Mutation function that posts data
    onSuccess: () => {
      Alert.alert(
        "Appointment Booked",
        `Appointment booked for ${fullName} on ${date.toDateString()} at ${hospitalTime}`,
        [
          {
            text: "OK",
            onPress: () => {
              navigation.popToTop(); // Pop to the top of the stack
            },
          },
        ]
      );
    },
    onError: (error: any) => {
      Alert.alert(
        "Booking Failed",
        error?.response?.data?.message ||
          "There was an error booking the appointment."
      );
    },
  });

  const handleSubmit = () => {
    const appointmentDetails = {
      fullName,
      address,
      contactNumber,
      email,
      doctorName,
      departmentName,
      appointmentDate: date?.toDateString(), // Ensure date is valid before calling toDateString
      appointmentTime: hospitalTime,
    };

    // Call the mutation to submit the appointment
    mutation.mutate(appointmentDetails);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container className="p-4 bg-white mb-20">
          {/* Appointment Information Section */}
          <View className="bg-[#F0F8FF] p-4 rounded-md my-2">
            <Text className="text-lg font-bold mb-4 text-[#0077b6]">
              Appointment Information
            </Text>
            {/* Doctor info */}
            <View className="bg-[#01B9EB] w-full h-auto rounded-md my-2">
              <View className="flex flex-row items-center justify-start p-4">
                <Image
                  className="h-10 w-10 rounded-md"
                  source={{ uri: `${profile}` }}
                />
                <View className="flex-1 ml-4">
                  <Text className="text-sm font-semibold text-white">
                    {doctorName}
                  </Text>
                  <Text className="text-sm text-white">{departmentName}</Text>
                </View>
              </View>
            </View>

            {/* Appointment Date */}
            <View>
              <Text className="text-sm font-semibold">Appointment Date</Text>
              <View className="flex flex-row items-center my-4 border border-gray-300 rounded">
                <TextInput
                  placeholder={date ? date?.toDateString() : "Select date"}
                  className="flex-1 py-2 pl-2 pr-0 h-8 bg-transparent"
                  underlineColor="transparent"
                  selectionColor="black"
                  theme={{ colors: { background: "transparent" } }}
                  editable={false}
                />
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                  <Avatar.Icon
                    icon="calendar"
                    size={42}
                    className="p-0 m-0 mr-2 bg-[#01B9EB] rounded-md"
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {showDatePicker && (
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="inline"
                onChange={handleDateChange}
                style={{ backgroundColor: "white" }}
              />
            )}

            {/* Appointment Time */}
            {date && (
              <View>
                <Text className="text-sm font-semibold">Appointment Time</Text>
                <DropDown
                  label={"Select Time"}
                  mode={"outlined"}
                  visible={showHospitalDropdown}
                  showDropDown={() => setShowHospitalDropdown(true)}
                  onDismiss={() => setShowHospitalDropdown(false)}
                  value={hospitalTime}
                  setValue={handleTimeChange}
                  list={appointmentTime}
                />
              </View>
            )}
          </View>

          {/* Personal Information Section */}
          <View className="bg-[#E8F4F8] p-4 rounded-md my-2">
            <Text className="text-lg font-bold mb-4 text-[#0077b6]">
              Personal Information
            </Text>

            {/* Full Name */}
            <View>
              <Text className="text-sm font-semibold">Full Name</Text>
              <TextInput
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter full name"
                className="my-2"
                mode="outlined"
              />
            </View>

            {/* Address */}
            <View>
              <Text className="text-sm font-semibold">Address</Text>
              <TextInput
                value={address}
                onChangeText={setAddress}
                placeholder="Enter address"
                className="my-2"
                mode="outlined"
              />
            </View>

            {/* Contact Number */}
            <View>
              <Text className="text-sm font-semibold">Contact Number</Text>
              <TextInput
                value={contactNumber}
                onChangeText={setContactNumber}
                placeholder="Enter contact number"
                keyboardType="phone-pad"
                className="my-2"
                mode="outlined"
              />
            </View>

            {/* Email */}
            <View>
              <Text className="text-sm font-semibold">Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter email"
                keyboardType="email-address"
                className="my-2"
                mode="outlined"
              />
            </View>
          </View>

          {/* Submit Button */}
          {date && hospitalTime && (
            <Button
              mode="contained"
              className="my-4 bg-[#01B9EB] rounded-md"
              onPress={handleSubmit}
            >
              Book Appointment
            </Button>
          )}
        </Container>
      </ScrollView>
      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
};

export default AppointmentScreen;
