import {
  View,
  Text,
  ScrollView,
  Alert,
  Animated,
  Easing,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { useCart } from "@context/useCart";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const CartScreen = () => {
  const { cartItems, cartTotal, removeFromCart } = useCart();

  // Animated value for sliding effect
  const slideAnim = useRef(new Animated.Value(200)).current; // Start off the screen (bottom)
  const formSlideAnim = useRef(new Animated.Value(300)).current; // For form sliding up

  const [formVisible, setFormVisible] = useState(false); // To control form visibility
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    cartItems: cartItems,
  });


  const slideUp = () => {
    Animated.timing(slideAnim, {
      toValue: 0, // Move into view (final position)
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const slideFormUp = () => {
    setFormVisible(true); // Show the form
    Animated.timing(formSlideAnim, {
      toValue: 0, // Slide the form up into view
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const slideFormDown = () => {
    Animated.timing(formSlideAnim, {
      toValue: 300, // Slide the form out of view
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => setFormVisible(false)); // Hide the form after the animation completes
  };

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

  const handleSubmit = () => {
    // Handle form submission
    const submissionData = { ...formData, cartItems };
    Alert.alert("Form Submitted", JSON.stringify(submissionData));
    setFormVisible(false); // Hide the form after submission
  };

  useEffect(() => {
    // Trigger slide-up animation when component mounts
    slideUp();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View className="flex-1 p-4 relative">
        {cartItems.length === 0 ? (
          <View className="flex flex-row justify-center items-center gap-2">
            <FontAwesome6 name="circle-info" size={20} color="#01b9eb" />
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

            {/* Bottom floating section with animated sliding effect */}
            <Animated.View
              className="absolute left-0 right-0 py-2 px-4 bg-gray-100 mx-4"
              style={{
                transform: [{ translateY: slideAnim }],
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
                <TouchableOpacity onPress={slideFormUp}>
                  <View className="bg-[#01b9eb] py-2 px-6 rounded-full shadow-md">
                    <Text className="text-white text-lg text-center">
                      Proceed
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Animated.View>

            {/* Sliding form that appears when Proceed is clicked */}
            {formVisible && (
              <Animated.View
                className="absolute left-0 right-0 bg-white p-4"
                style={{
                  transform: [{ translateY: formSlideAnim }],
                  bottom: 0,
                  height: "50%",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 6,
                  elevation: 15,
                }}
              >
                <TouchableWithoutFeedback onPress={slideFormDown}>
                  <View className="absolute -top-7 left-1/2 transform -translate-x-1/2 -translate-y-1 px-2 py-3 bg-black/50 rounded-md">
                    <FontAwesome6 name="arrow-down" size={20} color="white" />
                  </View>
                </TouchableWithoutFeedback>
                <Text className="text-lg font-bold mb-4 text-center">
                  Complete your details
                </Text>

                {/* Form Fields */}
                <TextInput
                  placeholder="Full Name"
                  className="border border-gray-300 p-2 rounded-md mb-2"
                  value={formData.fullName}
                  onChangeText={(text) =>
                    setFormData({ ...formData, fullName: text })
                  }
                />
                <TextInput
                  placeholder="Email"
                  className="border border-gray-300 p-2 rounded-md mb-2"
                  value={formData.email}
                  onChangeText={(text) =>
                    setFormData({ ...formData, email: text })
                  }
                />
                <TextInput
                  placeholder="Contact"
                  keyboardType="phone-pad"
                  className="border border-gray-300 p-2 rounded-md mb-2"
                  value={formData.contact}
                  onChangeText={(text) =>
                    setFormData({ ...formData, contact: text })
                  }
                />

                {/* Submit Button */}
                <TouchableOpacity onPress={handleSubmit}>
                  <View className="bg-[#01B9EB] py-2 px-6 rounded-full shadow-md mt-4">
                    <Text className="text-white text-lg text-center">
                      Submit
                    </Text>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            )}
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CartScreen;
