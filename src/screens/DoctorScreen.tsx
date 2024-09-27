// Defaults
import React, { useCallback, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

// Components
import { Container, Loader } from "@components/index";

// Stores
import { useDoctorsApi } from "stores";
import useSearchApi from "stores/useSearchApi";

const DoctorScreen = ({ navigation, route }: any) => {
  const { name, logo, address, phone, hospitalId, slug } = route.params;

  // States
  const [selectedId, setSelectedId] = useState<any>(null);
  const [departmentName, setDepartmentName] = useState<string | null>("All");

  // Fetch API
  const { getDoctors, getDoctorssFetching } = useDoctorsApi(slug);
  const { getSearchData, getSearchDataFetching } = useSearchApi(
    selectedId,
    hospitalId
  );

  const DOCTOR_IMG_PATH = getDoctors?.doctor_img_path;

  // Filter doctors based on selected department
  const filteredDoctors = selectedId
    ? getSearchData?.doctors
    : getDoctors?.doctors;

  // Count total doctors for each department
  const departmentDoctorCount = (department: number) => {
    return getDoctors?.doctors?.filter(
      (doc: any) => doc?.departments === department
    ).length;
  };

  // Department colors
  const colorList = [
    "bg-green-100",
    "bg-blue-100",
    "bg-slate-100",
    "bg-red-100",
    "bg-orange-100",
  ];

  // Get department and update selectedId
  const getDoc = useCallback((id: number | null, departmentName?: string) => {
    setSelectedId(id);
    setDepartmentName(departmentName || "All");
  }, []);

  return (
    <>
      {getDoctorssFetching ? (
        <Loader />
      ) : (
        <Container>
          {/* Hospital Info */}
          <View className="bg-[#01B9EB] w-full h-auto rounded-md my-2">
            <View className="flex flex-row items-center justify-start p-4">
              <Image
                className="h-10 w-10 rounded-md"
                source={{
                  uri: `https://healthhelpline.com.np/assets/upload/clinic-img/${logo}`,
                }}
              />
              <View className="flex-1 ml-4">
                <Text className="text-sm font-semibold text-white">{name}</Text>
                <View className="flex flex-row items-center justify-start">
                  <FontAwesome6 name="location-dot" size={14} color="white" />
                  <Text className="text-sm text-white mx-2">{address}</Text>
                </View>

                <View className="flex flex-row items-center justify-start">
                  <FontAwesome6 name="square-phone" size={14} color="white" />
                  <Text className="text-sm text-white mx-1">{phone}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Department List */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="h-[36px] my-4"
          >
            <TouchableOpacity onPress={() => getDoc(null, "All")}>
              <View
                className={`p-1 rounded ${
                  selectedId === null ? "bg-green-300" : "bg-gray-100"
                }`}
              >
                <Text className="">{`All `}</Text>
              </View>
            </TouchableOpacity>

            {getDoctors?.department.map((items: any, id: number) => (
              <TouchableOpacity
                key={id}
                onPress={() =>
                  getDoc(items?.department_id, items?.department_name)
                }
              >
                <View
                  className={`p-1 mx-2 rounded ${
                    selectedId === items?.department_id
                      ? "bg-green-300"
                      : colorList[id % colorList.length]
                  }`}
                >
                  <Text className="">{`${items?.department_name} `}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Doctor List */}
          <ScrollView showsVerticalScrollIndicator={false} className="mb-60">
            <View>
              <View className="flex flex-row items-center justify-between mb-2">
                <Text className="text-sm font-bold">
                  {`${departmentName}  ` || "All Doctors"}
                </Text>
              </View>
              {filteredDoctors?.length > 0 ? (
                filteredDoctors?.map((doctorList: any, idx: number) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("AppointmentScreen", {
                        clinicId: doctorList?.clinic_id, // Hospital Id
                        doctorId: doctorList?.doctor_id, // Doctor Id
                        // departId:
                        departmentName:
                          selectedId === null
                            ? doctorList?.departments
                            : doctorList?.department_name, // Department Id
                        doctorName:
                          doctorList?.firstname + " " + doctorList?.lastname,
                        profile:
                          doctorList?.profile_img !== null
                            ? DOCTOR_IMG_PATH + doctorList?.profile_img
                            : "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg",
                      })
                    }
                    key={idx}
                  >
                    <View className="bg-gray-100 w-full h-auto rounded-md my-2">
                      <View className="flex flex-row items-center justify-start p-4">
                        <Image
                          className="h-10 w-10 rounded-full bg-slate-300 object-cover"
                          source={{
                            uri: `${
                              doctorList?.profile_img !== null
                                ? DOCTOR_IMG_PATH + doctorList?.profile_img
                                : "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
                            }`,
                          }}
                        />
                        <View className="flex-1 ml-4">
                          <Text className="text-lg font-bold capitalize">
                            {doctorList?.firstname + " " + doctorList?.lastname}
                          </Text>
                          <Text className="text-sm ">
                            {doctorList?.department_id}
                            {!selectedId
                              ? doctorList?.departments
                              : doctorList?.department_name}
                          </Text>
                          <Text className="text-sm ">
                            {`NMC NO. ${doctorList?.council_regno}`}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))
              ) : getSearchDataFetching ? (
                <Loader />
              ) : (
                <Text>No doctors available for {departmentName}</Text>
              )}
            </View>
          </ScrollView>
        </Container>
      )}
    </>
  );
};

export default DoctorScreen;
