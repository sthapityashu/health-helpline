// Default
import { ScrollView, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

// Components
import { Container } from "@components/index";

// Utils
import { BloodTest } from "@utils/data/constants/blood-test";

const BloodTestListScreen = ({ route }: any) => {
  // Get Id from navigation
  const { userId } = route.params;

  // Compare the Id and get all the data based on Id
  const bloodTest = BloodTest.find((test: any) => test.testId === userId);

  return (
    <Container>
      <Text className="text-2xl my-4 text-center">{bloodTest?.category}</Text>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-32">
        {bloodTest.tests.map((item: any, id: number) => (
          <View className="bg-gray-100 h-auto w-full py-4 rounded-lg mb-2">
            <View className="flex flex-row items-center justify-between px-4">
              <View className="w-[85%]">
                <Text className="text-base font-semibold capitalize">
                  {item}
                </Text>
                <Text className="text-xl">Rs. 1400</Text>
              </View>
              <View className="w-[15%] flex justify-end items-end">
                <Avatar.Icon
                  icon="plus"
                  size={30}
                  color="white"
                  className="bg-[#01B9EB] rounded-md"
                />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default BloodTestListScreen;
