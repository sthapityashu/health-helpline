import React from "react";
import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Avatar, IconButton, Text, TextInput } from "react-native-paper";
import { Container } from "../components";
import { BloodTest } from "@utils/data/constants/blood-test";

const backgroundColors = [
  "bg-green-100",
  "bg-red-100",
  "bg-gray-100",
  "bg-blue-100",
  "bg-orange-100",
  "bg-slate-100",
];

const BloodTestScreen = ({ navigation }: any) => {
  const [text, setText] = React.useState("");
  console.log("BloodTestBloodTest", BloodTest);

  const pairs = BloodTest.reduce(
    (result: any, value: any, index: any, array: any) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    },
    []
  );

  console.log("pairs", pairs);
  return (
    <>
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
        <View className="flex flex-row items-center justify-between mb-2">
          <Text className="text-xl font-bold">
            Health Checkups and Screenings
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="mb-60">
          <View className="flex flex-col mt-4 gap-3">
            {pairs.map((pair: any, index: number) => (
              <View className="flex flex-row justify-between" key={index}>
                {pair.map((item: any, subIndex: number) => {
                  // Calculate the index for the background color
                  const colorIndex =
                    (index * 2 + subIndex) % backgroundColors.length;
                  return (
                    <TouchableOpacity
                      className="h-[200px] w-[48%]"
                      onPress={() =>
                        navigation.navigate("BloodTestListScreen", {
                          userId: item.testId,
                        })
                      }
                      key={subIndex}
                    >
                      <View
                        className={`${backgroundColors[colorIndex]} rounded-lg flex justify-start`}
                      >
                        <Image
                          source={{ uri: item.image }}
                          className="h-[70%] w-full rounded-t-lg"
                          alt={item.category}
                        />
                        <View className="h-[30%] flex items-center justify-center">
                          <Text className="text-[14px] px-2 text-center">
                            {item.category}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default BloodTestScreen;
