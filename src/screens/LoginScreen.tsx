import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Button, TextInput, Divider } from "react-native-paper";
import { Header, Container } from "../components";

const LoginScreen = ({ navigation }: any) => {
  const [text, setText] = React.useState("");

  return (
    <>
      <Container>
        <Header> Login</Header>

        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          className="rounded-none my-4"
        />
        <TextInput
          label="Password"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
        />
        <Button
          mode="contained"
          className="my-4 bg-[#01B9EB] rounded-sm"
          onPress={() => navigation.navigate("DashboardScreen")}
        >
          Submit
        </Button>
        <Divider className="mt-4 mb-6" />
        <View className="flex flex-row gap-4">
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text
              className="text-[#01B9EB]"
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              Register now
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    </>
  );
};

export default LoginScreen;
