// Defaults
import React, { useState, useEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Chip } from "react-native-paper";

// Context
import { useCart } from "@context/useCart";

//
import { Container } from "@components/index";
import { useNavigation } from "@react-navigation/native";

const BloodTestListScreen = ({ route, navigation }: any) => {
  const { userId, name, sub } = route.params;
  const { cartItems, cartTotal, addToCart, removeFromCart } = useCart();
  // const navigation = useNavigation();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  console.log("Cart Items", cartItems);

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

  return (
    <Container>
      {/* Button to navigate to CartScreen */}
      {/* <View className="flex-row justify-between items-center py-4 px-4">
        <TouchableOpacity onPress={() => navigation.navigate("Hospital")}>
          <Text className="text-lg text-blue-500">Go to Cart</Text>
        </TouchableOpacity>
      </View> */}

      {/* Display total price at the top */}
      <View className="bg-blue-50 py-4 px-4 flex flex-row justify-between items-center">
        <View className="flex flex-row items-center justify-start">
          <Text>{`Selected  `}</Text>
          <Text>{`(${checkedItems?.length})`}</Text>
        </View>
        <View className="flex items-center justify-start flex-row">
          <Text className="font-bold">Total:</Text>
          <Text>Rs. {cartTotal}</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-4 mb-[10px]"
      >
        {sub
          ?.filter((item: any) => item.price > 0)
          .map((item: any, id: number) => (
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
                  <Chip
                    selected={checkedItems.includes(item.id)}
                    selectedColor="green"
                  >
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
