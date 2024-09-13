// Default
import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Text } from "react-native-paper";

// Components
import { Container, SearchInput } from "@components/index";

// Utils
import { BloodTest } from "@utils/data/constants/blood-test";
import useLabApi from "@stores/useLabApi";

const backgroundColors = [
  "bg-green-100",
  "bg-red-100",
  "bg-gray-100",
  "bg-blue-100",
  "bg-orange-100",
  "bg-slate-100",
];

const BloodTestScreen = ({ navigation }: any) => {
  // Fetch Api
  const { getLabTest } = useLabApi();

  console.log("Lab Test", getLabTest?.labtestPrice);

  // Function to reduce the total array into 2
  const pairs = getLabTest?.labtestPrice?.reduce(
    (result: any, value: any, index: any, array: any) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    },
    []
  );

  return (
    <>
      <Container>
        <SearchInput />
        {/* Doctor Speciality */}
        <View className="flex flex-row items-center justify-between mb-2">
          <Text className="text-xl font-bold">
            Health Checkups and Screenings
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} className="mb-60">
          <View className="flex flex-col mt-4 gap-3">
            {pairs?.map((pair: any, index: number) => (
              <View className="flex flex-row justify-between" key={index}>
                {pair?.map((item: any, subIndex: number) => {
                  // Calculate the index for the background color
                  const colorIndex =
                    (index * 2 + subIndex) % backgroundColors.length;
                  return (
                    <TouchableOpacity
                      className="h-[200px] w-[48%]"
                      onPress={() =>
                        navigation.navigate("BloodTestListScreen", {
                          userId: item.id,
                          name: item.title,
                          sub: item.sub,
                        })
                      }
                      key={subIndex}
                    >
                      <View
                        className={`${backgroundColors[colorIndex]} rounded-lg flex justify-start`}
                      >
                        {/* <Image
                          source={{ uri: item.image }}
                          className="h-[70%] w-full rounded-t-lg"
                          alt={item.category}
                        /> */}
                        <View className="h-[30%] flex items-center justify-center">
                          <Text className="text-[14px] px-2 text-center">
                            {item.title}
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
