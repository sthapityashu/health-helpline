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
import { Container, Loader, SearchInput } from "@components/index";
import useHealthCentersApi from "@stores/useHealthCentersApi";

const HospitalScreen = ({ navigation }: any) => {
  const {
    getHealthCenters,
    getHealthCentersFetching,
    getHealthCentersFetchError,
  }: any = useHealthCentersApi();

  if (getHealthCentersFetching) {
    return <Loader />;
  }

  // console.log("Health Centers", getHealthCenters.centers);
  return (
    <Container>
      <SearchInput />
      <View>
        <Text>Hospitals ({getHealthCenters?.centers?.length})</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-52">
        {getHealthCenters?.centers?.map((center: any, idx: number) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DoctorScreen", {
                logo: center?.brand_logo,
                name: center?.name,
                address: center?.address,
                phone: center?.landline,
                hospitalId: center?.clinic_id,
                slug: center?.slug,
              })
            }
            key={idx}
          >
            <View className="bg-gray-100 w-full h-auto rounded-md my-2">
              <View className="flex flex-row items-center justify-start p-4">
                <Image
                  className="h-10 w-10 rounded-md"
                  source={{
                    uri: `https://healthhelpline.com.np/assets/upload/clinic-img/${center?.brand_logo}`,
                  }}
                />
                <View className="flex-1 ml-4">
                  <Text className="text-sm font-semibold">{center?.name}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  );
};

export default HospitalScreen;
