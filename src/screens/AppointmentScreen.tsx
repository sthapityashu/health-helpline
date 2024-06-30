import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
      <View className="mb-4">
        <Text className="text-lg font-bold">Book an Appointment</Text>
      </View>

      <View className="mb-4">
        {/* <Text className="mb-2">Select Hospital</Text> */}
        <DropDown
          label={"Select Hospital"}
          mode={"outlined"}
          visible={showHospitalDropdown}
          showDropDown={() => setShowHospitalDropdown(true)}
          onDismiss={() => setShowHospitalDropdown(false)}
          value={hospital}
          setValue={setHospital}
          list={hospitals}
        />
      </View>

      <View className="mb-4">
        <DropDown
          label={"Select Doctor"}
          mode={"outlined"}
          visible={showDoctorDropdown}
          showDropDown={() => setShowDoctorDropdown(true)}
          onDismiss={() => setShowDoctorDropdown(false)}
          value={doctor}
          setValue={setDoctor}
          list={doctors}
        />
      </View>

      <View className="mb-4">
        <Text className="mb-2">Select Date</Text>

        <DateTimePicker
          value={date}
          mode="date"
          display="calendar"
          onChange={handleDateChange}
        />
      </View>
      <View className="mb-4">
        <Text className="mb-2">{time.toTimeString().substr(0, 5)}</Text>
        <TouchableOpacity onPress={() => setShowTimePicker(true)}>
          <Avatar.Icon
            icon="clock"
            size={64}
            className="bg-transparent"
            color="black"
          />
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="spinner"
            onChange={handleTimeChange}
            style={{ backgroundColor: "white" }} // Adjust as needed
          />
        )}
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
