import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Header, Container } from "../components";

const LoginScreen = ({ navigation }: any) => {
  const [text, setText] = React.useState("");

  return (
    <>
      <SafeAreaView className="flex-1 justify-center items-center">
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
            className="my-4 bg-blue-500 rounded-none"
            onPress={() => navigation.navigate("DashboardScreen")}
          >
            Submit
          </Button>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
