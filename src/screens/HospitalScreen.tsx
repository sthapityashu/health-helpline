import React, { useEffect, useRef, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
  Button,
} from "react-native";
import { Container, SearchInput } from "@components/index";
import useHealthCentersApi from "@stores/useHealthCentersApi";
import { useIsFocused } from "@react-navigation/native";

const HospitalScreen = ({ navigation }: any) => {
  // const {
  //   getHealthCenters,
  //   getHealthCentersFetching,
  //   getHealthCentersFetchError,
  // }: any = useHealthCentersApi();

  // if (getHealthCentersFetching) {
  //   return (
  //     <View className="flex-1 items-center justify-center min-w-screen mx-auto">
  //       <ActivityIndicator size="large" color="#01B9EB" />
  //     </View>
  //   );
  // }

  const isFocused = useIsFocused();

  console.log("Is Focused", isFocused);

  return (
    <Container>
      <SearchInput />
      <ScrollView showsVerticalScrollIndicator={false} className="mb-44">
        {/* {getHealthCenters?.centers?.map((center: any, idx: number) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DoctorScreen", {
                hospitalId: center?.clinic_id,
                slug: center?.slug,
              })
            }
            key={idx}
          >
            <View className="bg-gray-100 w-full h-auto rounded-md my-2">
              <View className="flex flex-row items-center justify-start p-4">
                <Image
                  className="h-20 w-20 rounded-md"
                  source={{
                    uri: `https://healthhelpline.com.np/assets/upload/clinic-img/${center?.brand_logo}`,
                  }}
                />
                <View className="flex-1 ml-4">
                  <Text className="text-xl font-bold">{center?.name}</Text>
                  <Text className="text-lg">{center?.address}</Text>
                  <Text className="font-semibold">{center?.landline}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))} */}
      </ScrollView>
    </Container>
  );
};

export default HospitalScreen;
