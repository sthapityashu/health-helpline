import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { Container, Loader, SearchInput } from "@components/index";
import useHealthCentersApi from "@stores/useHealthCentersApi";

const HospitalScreen = ({ navigation }: any) => {
  const { getHealthCenters, getHealthCentersFetching }: any =
    useHealthCentersApi();

  const [filteredCenters, setFilteredCenters] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // Search function to filter hospitals
  const handleSearch = (searchTerm: string) => {
    if (searchTerm) {
      const filtered = getHealthCenters?.centers?.filter((center: any) =>
        center?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCenters(filtered);
      setShowDropdown(true); // Show dropdown when there are results
    } else {
      setFilteredCenters([]);
      setShowDropdown(false); // Hide dropdown when search is cleared
    }
  };

  const handleDropdownSelect = (center: any) => {
    setShowDropdown(false);
    navigation.navigate("DoctorScreen", {
      logo: center?.brand_logo,
      name: center?.name,
      address: center?.address,
      phone: center?.landline,
      hospitalId: center?.clinic_id,
      slug: center?.slug,
    });
  };

  const handleSelectHospital = (center: any) => {
    navigation.navigate("DoctorScreen", {
      logo: center?.brand_logo,
      name: center?.name,
      address: center?.address,
      phone: center?.landline,
      hospitalId: center?.clinic_id,
      slug: center?.slug,
    });
  };
  if (getHealthCentersFetching) {
    return <Loader />;
  }

  return (
    <Container>
      {/* <SearchInput onSearch={handleSearch} placeholder="Search Hospitals" /> */}
      <SearchInput
        onSearch={handleSearch}
        placeholder="Search Hospitals"
        data={getHealthCenters.centers} // Pass the data prop
        onSelect={handleSelectHospital} // Pass the select handler
      />

      {/* Display all hospitals in the ScrollView when the dropdown is not shown */}
      <ScrollView showsVerticalScrollIndicator={false} className="mb-28">
        <View>
          <Text>Hospitals ({getHealthCenters?.centers?.length})</Text>
        </View>
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
