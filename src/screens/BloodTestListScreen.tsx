// Default
import { ScrollView, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

// Components
import { Container } from "@components/index";

// Utils
import { BloodTest } from "@utils/data/constants/blood-test";

const BloodTestListScreen = ({ route }: any) => {
  // Get Id from navigation
  const { userId, name, sub } = route.params;
  console.log("UserId", userId);
  console.log("Sub Category", sub);

  // Compare the Id and get all the data based on Id
  const bloodTest = BloodTest.find((test: any) => test.testId === userId);

  return (
    <Container>
      <Text className="text-2xl my-4 text-center">{name}</Text>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-32">
        {sub?.map((item: any, id: number) => (
          <View
            className="bg-gray-100 h-auto w-full py-4 rounded-lg mb-2"
            key={id}
          >
            <View className="flex flex-row items-center justify-between px-4">
              {/* <View className="w-[85%]"> */}
              <Text className="text-base font-semibold capitalize">
                {item?.title}
              </Text>
              <Text className="text-xl">Rs. {item?.price}</Text>
              {/* </View> */}
              {/* <View className="w-[15%] flex justify-end items-end"> */}
              <Avatar.Icon
                icon="arrow-down-circle"
                size={30}
                color="#01B9EB"
                className="bg-transparent rounded-md"
              />
              {/* </View> */}
            </View>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default BloodTestListScreen;
