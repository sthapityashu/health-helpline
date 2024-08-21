// Defaults
import React from "react";
import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
// import { IMAGE_URL } from "react-native-dotenv";

// Components
import { Container, SearchInput } from "@components/index";
import { useHealthCentersApi } from "stores";

// import useSafeParseJson from "@hooks/useSafeParseJson";

const HospitalScreen = ({ navigation }: any) => {
  // States
  const [text, setText] = React.useState("");

  // Fetch API
  const api = useHealthCentersApi();
  console.log("api", api);
  const { getHealthCenters, getHealthCentersFetching } = useHealthCentersApi();

  const healthCenters = getHealthCenters?.centers;
  console.log("HealthCenters", healthCenters);

  return (
    <Container>
      <SearchInput />

      {/* <View className="flex flex-row items-center justify-between">
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
      </ScrollView> */}
      <ScrollView showsVerticalScrollIndicator={false} className="mb-44">
        <>
          {getHealthCentersFetching ? (
            <Text>Loading...</Text>
          ) : (
            <>
              {healthCenters?.map((centers: any, idx: any) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("DoctorScreen", {
                      hospitalId: centers?.clinic_id,
                      slug: centers?.slug,
                    })
                  }
                  key={idx}
                >
                  <View className="bg-gray-100 w-full h-auto rounded-md my-2">
                    <View className="flex flex-row items-center justify-start p-4">
                      <Image
                        className="h-20 w-20 rounded-md"
                        source={{
                          uri: `${
                            "https://healthhelpline.com.np/assets/upload/clinic-img/" +
                            centers?.brand_logo
                          }`,
                        }}
                      />
                      <View className="flex-1 ml-4">
                        <Text className="text-xl font-bold ">
                          {centers?.name}
                        </Text>
                        <Text className="text-lg ">{centers?.address}</Text>
                        <Text className="font-semibold">
                          {centers?.landline}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </>
          )}
        </>
      </ScrollView>
    </Container>
  );
};

export default HospitalScreen;
