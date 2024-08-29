import React, { useEffect, useRef, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import { Container, SearchInput } from "@components/index";
import { useHealthCentersApi } from "stores";

const HospitalScreen = ({ navigation }: any) => {
  // States
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const isMounted = useRef(false);

  const { getHealthCenters, getHealthCentersFetching } = useHealthCentersApi();

  // const healthCenters = getHealthCenters?.centers;

  useEffect(() => {
    // Simulate an API call with retry logic
    if (isMounted.current) return;

    const fetchHealthCenters = async () => {
      try {
        setLoading(true);
        setError(null);

        // Assuming getHealthCenters is a function that fetches the data
        const response = await getHealthCenters();
        setData(response?.data);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        setError(err.message);

        if (retryCount < 3) {
          setRetryCount(retryCount + 1);
          console.warn("Retrying API call...");
          fetchHealthCenters();
        } else {
          console.error("Failed to fetch health centers after retries");
        }
      }
    };

    fetchHealthCenters();
    isMounted.current = true;
  }, [retryCount]);
  // if (loading) return <div>Loading...</div>;
  if (error) return <Text>Error: {error}</Text>;
  return (
    <Container>
      <SearchInput />
      <ScrollView showsVerticalScrollIndicator={false} className="mb-44">
        {loading || getHealthCentersFetching ? (
          <View className="flex-1 items-center justify-center min-w-screen mx-auto">
            <ActivityIndicator size="large" color="#01B9EB" />
          </View>
        ) : error ? (
          <View className="flex-1 items-center justify-center min-w-screen mx-auto">
            <Text className="text-red-500">{error}</Text>
          </View>
        ) : (
          data?.map((centers: any, idx: number) => (
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
                      uri: `https://healthhelpline.com.np/assets/upload/clinic-img/${centers?.brand_logo}`,
                    }}
                  />
                  <View className="flex-1 ml-4">
                    <Text className="text-xl font-bold ">{centers?.name}</Text>
                    <Text className="text-lg ">{centers?.address}</Text>
                    <Text className="font-semibold">{centers?.landline}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </Container>
  );
};

export default HospitalScreen;
