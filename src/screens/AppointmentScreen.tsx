import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { TextInput, Button, HelperText, Avatar } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDown from "react-native-paper-dropdown";
import { Container } from "../components";

const AppointmentScreen = () => {
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showHospitalDropdown, setShowHospitalDropdown] = useState(false);
  const [showDoctorDropdown, setShowDoctorDropdown] = useState(false);

  const hospitals = [
    { label: "Alka Hospital", value: "Alka Hospital" },
    { label: "City Hospital", value: "City Hospital" },
    { label: "National Hospital", value: "National Hospital" },
  ];

  const doctors = [
    { label: "Dr. Smith", value: "Dr. Smith" },
    { label: "Dr. John", value: "Dr. John" },
    { label: "Dr. Doe", value: "Dr. Doe" },
  ];

  const handleDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleTimeChange = (event: any, selectedTime: any) => {
    setShowTimePicker(false);
    const currentTime = selectedTime || time;
    setTime(currentTime);
  };

  const handleSubmit = () => {
    alert(
      `Appointment booked with ${doctor} at ${hospital} on ${date.toDateString()} at ${time.toTimeString()}`
    );
  };

  return (
    <Container className="p-4 bg-white">
      <View className="my-4 flex flex-row bg-gray-400">
        <Image
          className="w-32 h-32 rounded-md"
          source={{
            uri: "https://thumbs.dreamstime.com/b/young-smiling-old-man-doctor-medical-specialist-medicine-concept-cute-d-icon-people-character-illustration-cartoon-minimal-young-279139332.jpg",
          }}
        />
        <View
          className="pl-2"
          style={{ flexWrap: "wrap", display: "flex", maxWidth:4 }}
        >
          <Text className="text-xl">Dr. Yashu Sthapit</Text>
          <Text className="text-base max-w-2 bg-green-400">
            Consultant Orthopaedic & Arthroscopic Surgeon
          </Text>
          <Text className="font-bold text-base">NMC NO. 4529</Text>
        </View>
      </View>
      <Button
        mode="contained"
        className="my-4 bg-[#01B9EB] rounded-md"
        onPress={handleSubmit}
      >
        Book Appointment
      </Button>
    </Container>
  );
};

export default AppointmentScreen;
