import React from "react";
import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { Avatar, IconButton, TextInput } from "react-native-paper";
import { Container } from "../components";

const HospitalScreen = ({ navigation }: any) => {
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
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl font-bold">Recently Visited</Text>
      </View>
      <ScrollView
        horizontal={true}
        className="h-10 my-4"
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row gap-4">
          <View className="bg-green-300 rounded-3xl p-2 min-w-[50px]">
            <Text className="text-center">Teaching Hospital</Text>
          </View>
          <View className="bg-red-300 rounded-3xl p-2">
            <Text className="text-center">Alka Hospital</Text>
          </View>
          <View className="bg-gray-300 rounded-3xl p-2">
            <Text className="text-center">Bir Hospital</Text>
          </View>
          <View className="bg-blue-300 rounded-3xl p-2">
            <Text>Norvic International</Text>
          </View>
          <View className="bg-slate-300 rounded-3xl p-2">
            <Text className="text-center">Grande International</Text>
          </View>
        </View>
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-44">
        <>
          <TouchableOpacity onPress={() => navigation.navigate("DoctorScreen")}>
            <View className="bg-gray-100 w-full h-28 rounded-md my-2">
              <View className="flex flex-row items-center justify-start p-4">
                <Image
                  className="h-20 w-20 rounded-md"
                  source={{
                    uri: "https://cdn-icons-png.freepik.com/512/4320/4320350.png",
                  }}
                />
                <View className="flex-1 ml-4">
                  <Text className="text-xl font-bold">Alka Hospital</Text>
                  <Text className="text-lg">Jawalakhel, Lalitpur</Text>
                  <Text className="font-semibold">
                    01,1237483 +977 9876567384
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DoctorScreen")}>
            <View className="bg-gray-100 w-full h-28 rounded-md my-2">
              <View className="flex flex-row items-center justify-start p-4">
                <Image
                  className="h-20 w-20 rounded-md"
                  source={{
                    uri: "https://cdn-icons-png.freepik.com/512/4320/4320350.png",
                  }}
                />
                <View className="flex-1 ml-4">
                  <Text className="text-xl font-bold">Teaching Hospital</Text>
                  <Text className="text-lg">Maharajgunj, Kathmandu</Text>
                  <Text className="font-semibold">
                    01,1237483 +977 9876567384
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DoctorScreen")}>
            <View className="bg-gray-100 w-full h-28 rounded-md my-2">
              <View className="flex flex-row items-center justify-start p-4">
                <Image
                  className="h-20 w-20 rounded-md"
                  source={{
                    uri: "https://cdn-icons-png.freepik.com/512/4320/4320350.png",
                  }}
                />
                <View className="flex-1 ml-4">
                  <Text className="text-xl font-bold">
                    Norvic International Hospital
                  </Text>
                  <Text className="text-lg">Thapathali, Kathmandu</Text>
                  <Text className="font-semibold">
                    01,1237483 +977 9876567384
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DoctorScreen")}>
            <View className="bg-gray-100 w-full h-28 rounded-md my-2">
              <View className="flex flex-row items-center justify-start p-4">
                <Image
                  className="h-20 w-20 rounded-md"
                  source={{
                    uri: "https://cdn-icons-png.freepik.com/512/4320/4320350.png",
                  }}
                />
                <View className="flex-1 ml-4">
                  <Text className="text-xl font-bold">
                    Grande International Hospital
                  </Text>
                  <Text className="text-lg">Dhapasi, Kathmandu</Text>
                  <Text className="font-semibold">
                    01,1237483 +977 9876567384
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DoctorScreen")}>
            <View className="bg-gray-100 w-full h-28 rounded-md my-2">
              <View className="flex flex-row items-center justify-start p-4">
                <Image
                  className="h-20 w-20 rounded-md"
                  source={{
                    uri: "https://cdn-icons-png.freepik.com/512/4320/4320350.png",
                  }}
                />
                <View className="flex-1 ml-4">
                  <Text className="text-xl font-bold">Bir Hospital</Text>
                  <Text className="text-lg">Tundikhel, Kathmandu</Text>
                  <Text className="font-semibold">
                    01,1237483 +977 9876567384
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("DoctorScreen")}>
            <View className="bg-gray-100 w-full h-28 rounded-md my-2">
              <View className="flex flex-row items-center justify-start p-4">
                <Image
                  className="h-20 w-20 rounded-md"
                  source={{
                    uri: "https://cdn-icons-png.freepik.com/512/4320/4320350.png",
                  }}
                />
                <View className="flex-1 ml-4">
                  <Text className="text-xl font-bold">B & B Hospital</Text>
                  <Text className="text-lg">Gwarko, Lalitpur</Text>
                  <Text className="font-semibold">
                    01,1237483 +977 9876567384
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </>
      </ScrollView>
    </Container>
  );
};

export default HospitalScreen;
