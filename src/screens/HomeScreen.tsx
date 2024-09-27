// Default
import React from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Avatar, Card, Button } from "react-native-paper";

// Relative
import { Container } from "../components";

// Hooks
import usePlatform from "../hooks/usePlatform";

const HomeScreen = ({ navigation }: any) => {
  // Custom Hooks
  const { isIOS } = usePlatform();

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Card Section */}
        <View
          className={`w-full rounded-lg overflow-hidden ${
            isIOS ? "my-4" : "mb-4"
          } `}
        >
          <ImageBackground
            source={{
              uri: "https://t3.ftcdn.net/jpg/05/98/48/68/360_F_598486839_BBuUhox8KrPFdgL4Sin1vOHitmKDZ29H.jpg",
            }}
            className={"w-full h-48 justify-center"}
          >
            <View className="flex-1 flex-row justify-between gap-4">
              <View className="flex flex-col px-4 py-4">
                <Text className="w-32 text-xl font-bold text-white mb-4">
                  Book and schedule with our nearest doctor
                </Text>
                <TouchableOpacity className="bg-white p-2 rounded-full w-24">
                  <Text className="font-bold">Find Nearby</Text>
                </TouchableOpacity>
              </View>
              <ImageBackground
                source={{
                  uri: "https://static.vecteezy.com/system/resources/thumbnails/024/585/355/small_2x/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png",
                }}
                className={"w-40 h-40"}
              />
            </View>
          </ImageBackground>
        </View>

        <>
          {/* Doctor Speciality */}
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-bold">Doctor Speciality</Text>
            <Text>See All</Text>
          </View>

          {/* Speciality Section */}
          <View className="flex flex-row justify-between items-center my-2">
            <View className="flex items-center justify-center gap-2">
              <View className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Image
                  className="h-[38px] w-[38px]"
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/7403/7403331.png",
                  }}
                />
              </View>
              <Text>General</Text>
            </View>

            <View className="flex items-center justify-center gap-2">
              <View className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Image
                  className="h-[38px] w-[38px]"
                  source={{
                    uri: "https://cdn-icons-png.freepik.com/512/9445/9445780.png",
                  }}
                />
              </View>
              <Text>Neurologic</Text>
            </View>

            <View className="flex items-center justify-center gap-2">
              <View className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Image
                  className="h-[38px] w-[38px]"
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/4228/4228684.png",
                  }}
                />
              </View>
              <Text>Radiology</Text>
            </View>

            <View className="flex items-center justify-center gap-2">
              <View className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <Image
                  className="h-[38px] w-[38px]"
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/10154/10154448.png",
                  }}
                />
              </View>
              <Text>Pediatric</Text>
            </View>
          </View>
        </>

        <>
          {/* Recomendation */}
          <View className="flex flex-row items-center justify-between my-2">
            <Text className="text-xl font-bold">Recommended Doctor</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("DoctorScreen")}
            >
              <Text>See All</Text>
            </TouchableOpacity>
          </View>

          {/* Doctor */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="h-[100px]"
          >
            <View className="flex flex-row justify-between items-center my-2 gap-3 mt-1">
              <TouchableOpacity
                onPress={() => navigation.navigate("AppointmentScreen")}
              >
                <View className="flex items-center justify-center  p-2 rounded-lg w-[100px] h-full">
                  <View className="w-16 h-16 flex items-center justify-center bg-green-300 rounded-full">
                    <Image
                      className="h-[50px] w-[50px]"
                      source={{
                        uri: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
                      }}
                    />
                  </View>
                  <Text className="h-10 text-center pt-1">
                    Dr. Yashu Sthapit
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("AppointmentScreen")}
              >
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
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("AppointmentScreen")}
              >
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
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("AppointmentScreen")}
              >
                <View className="flex items-center justify-center  p-2 rounded-lg w-[100px] h-full">
                  <View className="w-16 h-16 flex items-center justify-center bg-red-300 rounded-full">
                    <Image
                      className="h-[50px] w-[50px]"
                      source={{
                        uri: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
                      }}
                    />
                  </View>
                  <Text className="h-10 text-center pt-1">
                    Dr. Santosh Thapa
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("AppointmentScreen")}
              >
                <View className="flex items-center justify-center  p-2 rounded-lg w-[100px] h-full">
                  <View className="w-16 h-16 flex items-center justify-center bg-orange-300 rounded-full">
                    <Image
                      className="h-[50px] w-[50px]"
                      source={{
                        uri: "https://png.pngtree.com/png-clipart/20220911/original/pngtree-male-doctor-avatar-icon-illustration-png-image_8537702.png",
                      }}
                    />
                  </View>
                  <Text className="h-10 text-center pt-1">
                    Dr. Ram Maharjan
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>

        <>
          {/* <View className="flex flex-row items-center justify-between my-2">
            <Text className="text-xl font-bold">Blood Test</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("BloodTestScreen")}
            >
              <Text>See All</Text>
            </TouchableOpacity>
          </View> */}
        </>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
