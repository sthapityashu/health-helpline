// Defaults
import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";

// Components
import { Container, SearchInput } from "@components/index";
import { useDoctorsApi } from "stores";

const DoctorScreen = ({ navigation, route }: any) => {
  const { hospitalId, slug } = route.params;

  const { getDoctors } = useDoctorsApi(slug);

  const DOCTOR_IMG_PATH = getDoctors?.doctor_img_path;

  console.log("Doctors List", getDoctors);

  return (
    <Container>
      <SearchInput />

      <ScrollView showsVerticalScrollIndicator={false} className="mb-44">
        {/* Recommendation Section */}
        <View>
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-bold">Recommended Docotors</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="h-[100px]"
          >
            {/* Speciality Section */}
            <View className="flex flex-row justify-between items-center my-2 gap-3 mt-1">
              <View className="flex items-center justify-center  p-2 rounded-lg w-[100px] h-full">
                <View className="w-16 h-16 flex items-center justify-center bg-green-300 rounded-full">
                  <Image
                    className="h-[50px] w-[50px]"
                    source={{
                      uri: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
                    }}
                  />
                </View>
                <Text className="h-10 text-center pt-1">Dr. Yashu Sthapit</Text>
              </View>

              <View className="flex items-center justify-center  p-2 rounded-lg w-[100px] h-full">
                <View className="w-16 h-16 flex items-center justify-center bg-blue-300 rounded-full">
                  <Image
                    className="h-[50px] w-[50px]"
                    source={{
                      uri: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
                    }}
                  />
                </View>
                <Text className="h-10 text-center pt-1">Dr. Udip Rai</Text>
              </View>

              <View className="flex items-center justify-center  p-2 rounded-lg w-[100px] h-full">
                <View className="w-16 h-16 flex items-center justify-center bg-slate-300 rounded-full">
                  <Image
                    className="h-[50px] w-[50px]"
                    source={{
                      uri: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
                    }}
                  />
                </View>
                <Text className="h-10 text-center pt-1">
                  Dr. Bikesh Maharjan
                </Text>
              </View>

              <View className="flex items-center justify-center  p-2 rounded-lg w-[100px] h-full">
                <View className="w-16 h-16 flex items-center justify-center bg-red-300 rounded-full">
                  <Image
                    className="h-[50px] w-[50px]"
                    source={{
                      uri: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
                    }}
                  />
                </View>
                <Text className="h-10 text-center pt-1">Dr. Santosh Thapa</Text>
              </View>
              <View className="flex items-center justify-center  p-2 rounded-lg w-[100px] h-full">
                <View className="w-16 h-16 flex items-center justify-center bg-orange-300 rounded-full">
                  <Image
                    className="h-[50px] w-[50px]"
                    source={{
                      uri: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
                    }}
                  />
                </View>
                <Text className="h-10 text-center pt-1">Dr. Ram Maharjan</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Overall List Section */}
        <>
          {getDoctors?.doctors?.map((doctorList: any, idx: number) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("AppointmentScreen")}
              key={idx}
            >
              <View className="bg-gray-100 w-full h-auto rounded-md my-2">
                <View className="flex flex-row items-center justify-start p-4">
                  <Image
                    className="h-20 w-20 rounded-md"
                    source={{
                      uri: `https://picsum.photos/200`,
                    }}
                  />
                  <View className="flex-1 ml-4">
                    <Text className="text-xl font-bold line-clamp-2">
                      {doctorList?.firstname + " " + doctorList?.lastname}
                    </Text>
                    <Text className="text-lg line-clamp-1">
                      {doctorList?.departments}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </>
      </ScrollView>
    </Container>
  );
};

export default DoctorScreen;
