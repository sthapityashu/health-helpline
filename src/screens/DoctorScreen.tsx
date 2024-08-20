import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";

// Components
import { Container, SearchInput } from "@components/index";
import { useDoctorsApi } from "stores";
import useSearchApi from "stores/useSearchApi";

const DoctorScreen = ({ navigation, route }: any) => {
  const { hospitalId, slug } = route.params;

  // States
  const [departmentId, setDepartmentId] = useState<any>(null);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  console.log("hostipal Id", hospitalId);
  console.log("departmentId", hospitalId);

  // Fetch API
  const { getDoctors, getDoctorssFetching } = useDoctorsApi(slug);
  const { getSearchData } = useSearchApi(departmentId, hospitalId);

  const DOCTOR_IMG_PATH = getDoctors?.doctor_img_path;

  console.log("getSearchData", getSearchData);
  console.log("filteredDoctors", filteredDoctors);

  // Filter doctors based on selected department
  useEffect(() => {
    if (departmentId) {
      const filtered = getSearchData?.doctors?.filter(
        (doctor: any) => doctor?.department_id === departmentId
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(getDoctors?.doctors);
    }
    console.log("getSearchData---------->", getSearchData?.doctors);
  }, [departmentId, getDoctors]);
  const colorList = [
    "bg-green-100",
    "bg-blue-100",
    "bg-slate-100",
    "bg-red-100",
    "bg-orange-100",
  ];

  const getItemColor = (index: number) => colorList[index % colorList?.length];

  const getDeptId = (id: number) => {
    setDepartmentId(id);
  };

  return (
    <>
      {getDoctorssFetching ? (
        <Text>Loading...</Text>
      ) : (
        <Container>
          <SearchInput />

          {/* Recommendation Section */}
          <View className="mb-2">
            <View className="flex flex-row items-center justify-between mb-2">
              <Text className="text-xl font-bold">Departments</Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {/* Speciality Section */}
              <View className="flex flex-row justify-between items-center gap-2">
                <TouchableOpacity onPress={() => setDepartmentId(null)}>
                  <View className={`bg-blue-100 p-2 rounded-2xl`}>
                    <Text className={`text-center capitalize`}>All</Text>
                  </View>
                </TouchableOpacity>
                {getDoctors?.department?.map((item: any, idx: number) => (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => getDeptId(item?.department_id)}
                  >
                    <View className={`${getItemColor(idx)} p-2 rounded-2xl`}>
                      <Text className={`text-center capitalize`}>
                        {item?.department_name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Overall List Section */}
          <ScrollView showsVerticalScrollIndicator={false} className="mb-44">
            <View>
              <View className="flex flex-row items-center justify-between mb-2">
                <Text className="text-xl font-bold">All Doctors</Text>
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
          </ScrollView>
        </Container>
      )}
    </>
  );
};

export default DoctorScreen;
