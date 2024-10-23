import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import { Button, Divider, TextInput } from "react-native-paper";
import Entypo from "@expo/vector-icons/Entypo";

const LoginPanel = ({ slideAnim, toggleLoginPanel }: any) => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.overlay}>
      <Animated.View
        style={[
          styles.loginPanel,
          {
            transform: [{ translateX: slideAnim }], // Apply horizontal slide
          },
        ]}
      >
        <View style={styles.loginContent}>
          <View className="flex flex-row items-center justify-between">
            <Text style={styles.loginTitle}>Login</Text>
            <TouchableOpacity onPress={toggleLoginPanel} className="mb-[20px]">
              <Entypo name="circle-with-cross" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TextInput
            label="Email"
            value={text}
            onChangeText={(text) => setText(text)}
            mode="outlined"
            className="rounded-none my-4 w-full h-[60px]"
          />
          <TextInput
            label="OTP"
            value={text}
            onChangeText={(text) => setText(text)}
            mode="outlined"
            className="rounded-none my-4 w-full h-[60px]"
          />
          <Button
            mode="contained"
            className="my-4 bg-[#01B9EB] rounded-sm"
            // onPress={() => navigation.navigate("DashboardScreen")}
          >
            Register
          </Button>
          <Divider  />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
    justifyContent: "flex-end",
  },
  loginPanel: {
    position: "absolute",
    height: "100%",
    width: "80%",
    backgroundColor: "#fff",
    right: 0,
    zIndex: 1000,
  },
  loginContent: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#01B9EB",
    borderRadius: 5,
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default LoginPanel;
