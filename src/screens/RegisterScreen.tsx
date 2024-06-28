// Defaults
import React from "react";
import { Container, Header } from "../components";
import { TextInput, Button, Divider } from "react-native-paper";
import { View, TouchableOpacity, Text } from "react-native";

const RegisterScreen = ({ navigation }: any) => {
  const [text, setText] = React.useState("");

  return (
    <Container>
      <Header>Register Now</Header>
      <TextInput
        label="Full Name"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
        className="rounded-none my-4"
      />
      <TextInput
        label="Phone Number"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
      />
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
      <TextInput
        label="Confirm Password"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
        className="rounded-none my-4"
      />
      <Button
        mode="contained"
        className="my-4 bg-[#01B9EB] rounded-sm"
        onPress={() => navigation.navigate("DashboardScreen")}
      >
        Register
      </Button>
      <Divider className="mt-4 mb-6" />
      <View className="flex flex-row gap-4">
        <Text>Already have an account?</Text>
        <TouchableOpacity>
          <Text
            className="text-[#01B9EB]"
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default RegisterScreen;
