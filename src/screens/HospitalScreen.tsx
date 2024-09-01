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

const HospitalScreen = ({ navigation }: any) => {
  const {
    getHealthCenters,
    getHealthCentersFetching,
    getHealthCentersFetchError,
  }: any = useHealthCentersApi();

  const [apiCallCount, setApiCallCount] = useState(0); // Track API call count
  const [showError, setShowError] = useState(false); // To toggle error message
  const isMounted = useRef(false); // To ensure API call is only made once
  const [retryCount, setRetryCount] = useState(0);

  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (isMounted.current) return; // Skip if already mounted

  //     if (retryCount < 3) {
  //       setRetryCount(retryCount + 1);
  //       console.warn("Retrying API call...");
  //       fetchHealthCenters();
  //     } else {
  //       console.error("Failed to fetch health centers after retries");
  //     }
  //   isMounted.current = true;
  // }, []);
  useEffect(() => {
    // Simulate an API call with retry logic
    if (isMounted.current) return;

    const fetchHealthCenters = async () => {
      try {
        setLoading(true);
        setError(null);

        // Assuming getHealthCenters is a function that fetches the data
        // const response = await getHealthCenters();
        setData(getHealthCenters?.centers);
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
  const handleShowError = () => {
    setShowError(true);
  };

  if (getHealthCentersFetching) {
    return (
      <View className="flex-1 items-center justify-center min-w-screen mx-auto">
        <ActivityIndicator size="large" color="#01B9EB" />
      </View>
    );
  }

  return (
    <Container>
      {getHealthCentersFetchError && showError && (
        <View className="p-4 bg-red-200 rounded-md mb-4">
          <Text className="text-red-600 font-bold">
            Error: {getHealthCentersFetchError.message}
          </Text>
          <Text className="text-red-600 font-bold">
            API Call Count: {apiCallCount}
          </Text>
        </View>
      )}

      <Button
        title="Show API Call Error"
        onPress={handleShowError}
        color="#FF0000"
      />

      <SearchInput />
      <ScrollView showsVerticalScrollIndicator={false} className="mb-44">
        {getHealthCenters?.centers?.map((center: any, idx: number) => (
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
        ))}
      </ScrollView>
    </Container>
  );
};

export default HospitalScreen;
