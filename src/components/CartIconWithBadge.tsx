import React from "react";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CartIconWithBadge = ({ cartCount }: any) => {
  return (
    <View className="mr-4">
      {/* Cart Icon */}
      <View className="relative">
        <Ionicons name="cart-outline" size={24} color="#fff" />
        {/* Badge */}
        {cartCount > 0 && (
          <View className="absolute -top-2 -right-2 bg-red-300 rounded-full h-5 w-5 flex items-center justify-center">
            <Text className="text-white text-xs font-bold">{cartCount}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default CartIconWithBadge;
