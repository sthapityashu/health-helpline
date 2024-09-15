// Default
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";

// Components
import { Container } from "@components/index";

// Utils
import { BloodTest } from "@utils/data/constants/blood-test";
import { useState } from "react";

const BloodTestListScreen = ({ route }: any) => {
  // Get Id from navigation
  const { userId, name, sub } = route.params;
  console.log("UserId", userId);
  console.log("Sub Category", sub);
  // Track which item is expanded
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [list, setList] = useState<number | null>(null);

  // Compare the Id and get all the data based on Id
  const bloodTest = BloodTest.find((test: any) => test.testId === userId);
  // Function to toggle the expanded state
  const toggleExpand = (id: number, listId: number) => {
    console.log("ID", id);
    console.log("Expanded ID", expandedId);
    setList(listId);
    setExpandedId(expandedId === id ? null : id);
  };
  // const list = userId === expandedId;

  return (
    <Container>
      {/* <Text className="text-2xl my-4 text-center">{name}</Text> */}
      <ScrollView showsVerticalScrollIndicator={false} className="mt-4">
        {sub?.map((item: any, id: number) => (
          <View
            className="bg-gray-100 h-auto w-full py-4 rounded-lg mb-2"
            key={id}
          >
            <View className="flex flex-row items-center justify-between px-4">
              <View className="w-[85%]">
                <Text className="text-base font-semibold capitalize">
                  {item?.title}
                  {item?.id}
                </Text>
                <Text className="text-xl">Rs. {item?.price}</Text>
              </View>
              {/* <View className="w-[15%] flex justify-end items-end"> */}
              <TouchableOpacity onPress={() => toggleExpand(id, item?.id)}>
                <Avatar.Icon
                  // icon="arrow-down-circle"
                  icon="plus"
                  size={30}
                  color="#01B9EB"
                  className="bg-transparent rounded-md"
                />
              </TouchableOpacity>
              {/* </View> */}
            </View>
            {/* Conditionally render additional options when expanded */}
            {expandedId === id && list === item?.id && (
              <>
                <View className="bg-gray-200 h-[2px] mx-2 shadow-md" />
                <View className="px-4 mt-2">
                  {/* Display additional sub list based on ID comparison */}
                  {item?.sub && item?.sub.length > 0 ? (
                    item.sub.map((subItem: any, subId: number) => (
                      <View
                        className="flex flex-row justify-between py-2"
                        key={subId}
                      >
                        <Text className="text-sm">{sub?.id}</Text>
                        <Text className="text-sm">{sub?.title}</Text>
                        <Text className="text-sm">Rs. {sub?.price}</Text>
                      </View>
                    ))
                  ) : (
                    <Text className="text-sm italic">
                      No additional tests available.
                    </Text>
                  )}
                </View>
              </>
            )}
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default BloodTestListScreen;
