import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Chip } from "react-native-paper";
import { useState, useEffect } from "react";
import React from "react";
import { useCart } from "@context/useCart";
import { Container } from "@components/index";
import { useNavigation } from "@react-navigation/native"; // For navigation

const BloodTestListScreen = ({ route, navigation }: any) => {
  const { userId, name, sub } = route.params;
  const { cartItems, cartTotal, addToCart, removeFromCart } = useCart();
  // const navigation = useNavigation();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  console.log("cartTotal", cartTotal);

  // Sync the checkedItems state with items in the cart
  useEffect(() => {
    const cartItemIds = cartItems.map((item: any) => item.id);
    setCheckedItems(cartItemIds);
  }, [cartItems]);

  // Handle adding to cart and updating checked state
  const handleAddToCart = (item: any) => {
    if (!checkedItems.includes(item.id)) {
      setCheckedItems([...checkedItems, item.id]);
      addToCart(item);
    }
  };

  // Handle removing from cart and updating checked state
  const handleRemoveFromCart = (item: any) => {
    if (checkedItems.includes(item.id)) {
      setCheckedItems(checkedItems.filter((id) => id !== item.id));
      removeFromCart(item);
    }
  };

  // Select all items
  const handleSelectAll = () => {
    if (checkedItems.length === sub.length) {
      setCheckedItems([]);
      sub.forEach((item: any) => removeFromCart(item));
    } else {
      const allIds = sub.map((item: any) => item.id);
      setCheckedItems(allIds);
      sub.forEach((item: any) => addToCart(item));
    }
  };

  return (
    <Container>
      {/* Button to navigate to CartScreen */}
      <View className="flex-row justify-between items-center py-4 px-4">
        <TouchableOpacity onPress={() => navigation.navigate("Hospital")}>
          <Text className="text-lg text-blue-500">Go to Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Display total price at the top */}
      <View className="bg-white py-4 px-4 flex flex-row justify-between items-center">
        <Text className="text-xl font-bold">{`Total: Rs. ${cartTotal}`}</Text>
        <Text>{cartTotal}</Text>
        {/* <TouchableOpacity onPress={handleSelectAll}>
          <Text className="text-sm text-blue-500">
            {checkedItems.length === sub.length ? "Deselect All" : "Select All"}
          </Text>
        </TouchableOpacity> */}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="mt-4">
        {sub?.map((item: any, id: number) => (
          <View
            className="bg-gray-100 h-auto w-full py-4 rounded-lg mb-2"
            key={id}
          >
            <View className="flex flex-row items-center justify-between px-4">
              <View className="w-[70%]">
                <Text className="text-base font-semibold capitalize">
                  {item?.title}
                </Text>
                <Text className="text-xl">Rs. {item?.price}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  checkedItems.includes(item.id)
                    ? handleRemoveFromCart(item)
                    : handleAddToCart(item)
                }
              >
                <Chip selected={checkedItems.includes(item.id)}>
                  {checkedItems.includes(item.id) ? "Added" : "Add"}
                </Chip>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default BloodTestListScreen;
