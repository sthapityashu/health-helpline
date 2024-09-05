import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Container, SearchInput } from "@components/index";
import { useDoctorsApi } from "stores";
import useSearchApi from "stores/useSearchApi";
import { useIsFocused } from "@react-navigation/native";

const DoctorScreen = ({ navigation, route }: any) => {
  const { hospitalId, slug } = route.params;
  const isFocused = useIsFocused();

  console.log("Doctor Screen is focused", isFocused);

  // States
  const [departmentId, setDepartmentId] = useState<any>(null);
  const [departmentName, setDepartmentName] = useState<any>(null);
  const [selectedId, setSelectedId] = useState<any>();

  // Fetch API
  const { getDoctors, getDoctorssFetching } = useDoctorsApi(slug);
  const { getSearchData } = useSearchApi(selectedId, hospitalId);

  // const DOCTOR_IMG_PATH = getDoctors?.doctor_img_path;

  // console.log("Doctors", getDoctors);

  // Filter doctors based on selected department
  // const filteredDoctors = departmentId
  //   ? getSearchData?.doctors
  //   : getDoctors?.doctors;

  const apiCallCountRef = useRef(0);
  const isMounted = useRef(false);
  // useEffect(() => {
  //   if (!isFocused) {
  //     console.log("Effect triggered");
  //     navigation.popToTop();
  //   }
  // }, [isFocused, navigation]);

  const getDoc = useCallback((id: number) => {
    setSelectedId(id);
    console.log("Get the Department ID", id);
  }, []);

  // return;
  const colorList = [
    "bg-green-100",
    "bg-blue-100",
    "bg-slate-100",
    "bg-red-100",
    "bg-orange-100",
  ];

  // const getItemColor = (index: number) => colorList[index % colorList?.length];

  return (
    <>
      {getDoctorssFetching ? (
        <View className="flex-1 items-center justify-center min-w-screen mx-auto">
          <ActivityIndicator size="large" color="#01B9EB" />
        </View>
      ) : (
        <Container>
          <SearchInput />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {getDoctors?.department?.map((items: any, id: number) => (
              <Pressable
                key={id}
                onPress={() => getDoc(items?.department_id)}
                className="flex flex-row m-2"
              >
                <Text
                  className={`p-2 ${
                    selectedId === items.department_id
                      ? "bg-green-200"
                      : "bg-yellow-200"
                  }`}
                >
                  {items?.department_name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          {getSearchData?.doctors?.map((depDoctor: any, id: number) => (
            <View key={id} className="m-2">
              <Text className="bg-green-200 p-2">{depDoctor?.firstname}</Text>
            </View>
          ))}

          {/* Recommendation Section */}

          {/* Overall List Section */}
          {/* <ScrollView showsVerticalScrollIndicator={false} className="mb-44">
            <View>
              <View className="flex flex-row items-center justify-between mb-2">
                <Text className="text-xl font-bold">
                  {departmentName ? departmentName : "All Doctors"}
                </Text>
              </View>
              {filteredDoctors?.map((doctorList: any, idx: number) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("AppointmentScreen", {
                      clinicId: doctorList?.clinic_id,
                      doctorId: doctorList?.doctor_id,
                    })
                  }
                  key={idx}
                >
                  <View className="bg-gray-100 w-full h-auto rounded-md my-2">
                    <View className="flex flex-row items-center justify-start p-4">
                      <Image
                        className="h-20 w-20 rounded-full bg-slate-300 object-cover"
                        source={{
                          uri: `${DOCTOR_IMG_PATH + doctorList?.profile_img}`,
                        }}
                      />
                      <View className="flex-1 ml-4">
                        <Text className="text-xl font-bold capitalize">
                          {doctorList?.firstname + " " + doctorList?.lastname}
                        </Text>
                        <Text className="text-lg ">
                          {doctorList?.departments}
                        </Text>
                        <Text className="text-lg ">
                          {`NMC NO. ${doctorList?.council_regno}`}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView> */}
        </Container>
      )}
    </>
  );
};

export default DoctorScreen;
