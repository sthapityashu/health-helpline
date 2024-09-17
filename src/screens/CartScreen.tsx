import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useCart } from "@context/useCart";

const CartScreen = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <View className="p-4">
      <Text className="text-2xl font-bold">Cart</Text>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          <ScrollView>
            {cartItems.map((item: any, index: number) => (
              <View
                key={index}
                className="flex flex-row justify-between py-2 border-b"
              >
                <Text>{item.title}</Text>
                <Text>Rs. {item.price}</Text>
              </View>
            ))}
          </ScrollView>
          <View className="py-4">
            <Text className="text-xl font-bold">Total: Rs. {cartTotal}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;
