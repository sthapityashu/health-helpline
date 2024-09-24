import { View, Text, ScrollView, Alert } from "react-native";
import React from "react";
import { useCart } from "@context/useCart";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const CartScreen = () => {
  const { cartItems, cartTotal, removeFromCart } = useCart();

  const removeCart = (item: any) => {
    Alert.alert("Remove Item", `Do you want to remove ${item.title}?`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <View className="flex-1 p-4 relative">
      {cartItems.length === 0 ? (
        <View className="flex flex-row justify-center items-center gap-2">
          <FontAwesome6 name="circle-info" size={20} color="black" />
          <Text>Your cart is empty.</Text>
        </View>
      ) : (
        <>
          <ScrollView contentContainerStyle={{ paddingBottom: 180 }}>
            {cartItems.map((item: any, index: number) => (
              <View
                key={index}
                className="flex flex-row justify-between items-center py-2 px-2 bg-gray-100 rounded-md my-1"
              >
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
                <Text>Rs. {item.price}</Text>
                <TouchableOpacity onPress={() => removeCart(item)}>
                  <View className="rounded-full">
                    <FontAwesome6
                      name="circle-minus"
                      size={24}
                      color="#F87171"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          {/* Bottom floating section */}
          <View
            className="absolute left-0 right-0 py-2 px-4 bg-gray-100 mx-4"
            style={{
              bottom: 30,
              borderRadius: 40,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 10,
            }}
          >
            <View className="flex flex-row items-center justify-between">
              <Text className="text-lg font-bold text-gray-800">
                {`Rs. ${cartTotal} `}
              </Text>
              <TouchableOpacity>
                <View className="bg-[#01B9EB] py-2 px-6 rounded-full shadow-md">
                  <Text className="text-white text-lg text-center">
                    Proceed
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;
