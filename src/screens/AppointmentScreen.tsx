import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropDown from "react-native-paper-dropdown";
import { Container } from "../components";

const AppointmentScreen = ({ route }: any) => {
  // Routing
  const { clinicId, doctorId } = route.params;

  console.log("Clinic Id --->", clinicId, "Doctor ID --->", doctorId);
  // States
  const [hospitalTime, setHospitalTime] = useState("");
  const [date, setDate] = useState<any>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showHospitalDropdown, setShowHospitalDropdown] = useState(false);

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

  const handleSubmit = () => {
    alert(`Appointment booked on \n ${date} at \n ${hospitalTime}`);
  };

  return (
    <Container className="p-4 bg-white">
      <View className="bg-gray-100 w-full h-40 rounded-md my-2 py-2 px-2">
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <View style={{ width: "40%" }}>
            <Image
              className="h-full w-32 rounded-full"
              source={{
                uri: "https://thumbs.dreamstime.com/b/young-smiling-old-man-doctor-medical-specialist-medicine-concept-cute-d-icon-people-character-illustration-cartoon-minimal-young-279139332.jpg",
              }}
            />
          </View>
          <View style={{ width: "60%" }} className="pl-2">
            <Text className="text-lg font-bold">Prof. Dr. Yashu Sthapit</Text>
            <Text className="py-2">MD, Neuro Surgeon, Neuro Specialist</Text>
            <Text className="font-bold">NMC NO. 1738</Text>
          </View>
        </View>
      </View>
      <View>
        <Text className="text-xl">Select Appointment Date</Text>
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

      {date && (
        <>
          <View>
            <Text className="text-xl">Select Appointment Time</Text>
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
          <Button
            mode="contained"
            className="my-4 bg-[#01B9EB] rounded-md"
            onPress={handleSubmit}
          >
            Book Appointment
          </Button>
        </>
      )}
    </Container>
  );
};

export default AppointmentScreen;
