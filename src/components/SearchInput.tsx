// Defaults
import React from "react";
import { View } from "react-native";
import { Avatar, IconButton, TextInput } from "react-native-paper";

const SearchInput = () => {
  // States
  const [text, setText] = React.useState("");

  return (
    <View className="flex flex-row items-center my-4 border border-gray-300 rounded">
      <TextInput
        placeholder="Search"
        value={text}
        onChangeText={(text) => setText(text)}
        className="flex-1 py-2 pl-2 pr-0 h-8 bg-transparent"
        underlineColor="transparent"
        selectionColor="black"
        theme={{ colors: { background: "transparent" } }}
      />
      <Avatar.Icon
        icon="magnify"
        size={32}
        className="p-0 m-0 bg-[#01B9EB] rounded-md"
        color="white"
      />
      <IconButton icon="filter-variant" size={24} className="p-0 m-0" />
    </View>
  );
};

export default SearchInput;
