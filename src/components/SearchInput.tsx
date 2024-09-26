import React, { useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { Avatar, IconButton, TextInput } from "react-native-paper";
import Entypo from "@expo/vector-icons/Entypo";

const SearchInput = ({ onSearch, placeholder, data, onSelect }: any) => {
  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  // Handle text change and pass the search text to the parent component
  const handleSearch = (inputText: string) => {
    setText(inputText);
    onSearch(inputText); // Call the search function passed from the parent

    // Filter the data based on the input
    const filtered = data.filter((item: any) =>
      item.name.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSelectItem = (item: any) => {
    setText(item.name); // Update the input field with the selected item
    setFilteredData([]); // Clear the filtered data

    // Call the onSelect prop to handle navigation
    onSelect(item);
  };

  // Clear search text and reset filtered data
  const clearSearch = () => {
    setText("");
    setFilteredData([]);
    onSearch(""); // Notify parent to clear search results
    setIsFocused(false); // Reset focus state
  };

  // Reset search field when navigating back
  useEffect(() => {
    return () => {
      setText("");
      setFilteredData([]);
    };
  }, []);

  return (
    <View className="flex flex-col">
      <View className="flex flex-row items-center border border-gray-300 rounded">
        <TextInput
          placeholder={placeholder || "Search"} // Use dynamic placeholder
          value={text}
          onChangeText={handleSearch}
          onFocus={() => setIsFocused(true)} // Set focus on input
          onBlur={() => setIsFocused(false)} // Clear focus on blur
          className="flex-1 py-2 pl-2 pr-0 h-8 bg-transparent"
          underlineColor="transparent"
          selectionColor="black"
          theme={{ colors: { background: "transparent" } }}
        />
        {isFocused && text.length > 0 ? ( // Show cross icon when focused and text is present
          <TouchableOpacity onPress={clearSearch} className="p-0 m-0">
            <Entypo name="squared-cross" size={32} color="#01B9EB" />
          </TouchableOpacity>
        ) : (
          <Avatar.Icon
            icon="magnify"
            size={32}
            className="p-0 m-0 bg-[#01B9EB] rounded-md"
            color="white"
          />
        )}
        <IconButton icon="filter-variant" size={24} className="p-0 m-0" />
      </View>

      {/* Dropdown for displaying filtered results */}
      {filteredData.length > 0 && (
        <View className="w-full bg-gray-100 mt-1 shadow-lg z-10">
          <FlatList
            data={filteredData}
            keyExtractor={(item: any) => item.clinic_id.toString()} // Ensure unique key for each item
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleSelectItem(item)}
                className="p-2 border-b border-gray-200"
              >
                <View className="flex items-center p-2 h-8">
                  <Text className="text-sm">{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            className="max-h-[500px]"
            showsVerticalScrollIndicator={true}
          />
        </View>
      )}
    </View>
  );
};

export default SearchInput;
