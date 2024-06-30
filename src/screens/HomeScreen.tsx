import React from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Container } from "../components";
import { Avatar, Card, Button } from "react-native-paper";

const HomeScreen = () => {

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Card Sction */}
        <View className={"w-full rounded-lg overflow-hidden my-4"}>
          <ImageBackground
            source={{
              uri: "https://t3.ftcdn.net/jpg/05/98/48/68/360_F_598486839_BBuUhox8KrPFdgL4Sin1vOHitmKDZ29H.jpg",
            }}
            className={"w-full h-44 justify-center"}
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
        {/* Recomendation */}
        <View className="flex flex-row items-center justify-between my-2">
          <Text className="text-xl font-bold">Recommendation Doctor</Text>
          <Text>See All</Text>
        </View>
        {/* Recomendation Card */}
        <>
          <View className="bg-gray-100 w-full h-36 rounded-md my-2">
            <View className="flex flex-row w-full h-full items-center justify-around py-3">
              <Image
                className="h-full w-32 rounded-md"
                source={{
                  uri: "https://thumbs.dreamstime.com/b/young-smiling-old-man-doctor-medical-specialist-medicine-concept-cute-d-icon-people-character-illustration-cartoon-minimal-young-279139332.jpg",
                }}
              />
              <View>
                <Text className="text-xl font-bold">Dr. Yashu Sthapit</Text>
                <Text>Neuro Surgeon</Text>
                <View className="flex flex-row items-center justify-start bg-gray-200 rounded-md my-2">
                  <Avatar.Icon
                    icon="star"
                    color="#FFD700"
                    className="bg-transparent px-0"
                    size={32}
                  />
                  <Text>4.8 (4,278 reviews)</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="bg-gray-100 w-full h-36 rounded-md my-2">
            <View className="flex flex-row w-full h-full items-center justify-around py-3">
              <Image
                className="h-full w-32 rounded-md"
                source={{
                  uri: "https://i.pinimg.com/736x/41/74/fa/4174fad3ab126ebcb3d977795400c854.jpg",
                }}
              />
              <View>
                <Text className="text-xl font-bold">Dr. Udip Yakha Rai</Text>
                <Text>Radiologis</Text>
                <View className="flex flex-row items-center justify-start bg-gray-200 rounded-md my-2">
                  <Avatar.Icon
                    icon="star"
                    color="#FFD700"
                    className="bg-transparent px-0"
                    size={32}
                  />
                  <Text>4.8 (4,278 reviews)</Text>
                </View>
              </View>
            </View>
          </View>
        </>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
