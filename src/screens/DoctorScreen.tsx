import React from "react";
import { Container } from "../components";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { Avatar, TextInput, IconButton } from "react-native-paper";

const DoctorScreen = ({ navigation }: any) => {
  const [text, setText] = React.useState("");
  return (
    <Container>
      <View className="flex flex-row items-center my-4 border border-gray-300 rounded">
        <TextInput
          placeholder="Search"
          value={text}
          onChangeText={(text) => setText(text)}
          className="flex-1 py-2 pl-2 pr-0 h-8 bg-transparent"
          underlineColor="transparent"
          selectionColor="black"
          theme={{ colors: { background: "transparent" } }}
        />
        <Avatar.Icon
          icon="magnify"
          size={32}
          className="p-0 m-0 bg-[#01B9EB] rounded-md"
          color="white"
        />
        <IconButton icon="filter-variant" size={24} className="p-0 m-0" />
      </View>
      {/* Doctor Speciality */}
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl font-bold">Recommended Docotors</Text>
      </View>

      {/* Speciality Section */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="h-[150px]"
      >
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
            <Text className="h-10 text-center pt-1">Dr. Bikesh Maharjan</Text>
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
      <ScrollView showsVerticalScrollIndicator={false} className="mb-44">
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate("AppointmentScreen")}
          >
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
          </TouchableOpacity>

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

export default DoctorScreen;
