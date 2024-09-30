// Default
import React from "react";
import { SafeAreaView, View, StyleSheet, StatusBar } from "react-native";

// Hooks
import usePlatform from "../hooks/usePlatform";

const Container = (props: any) => {
  // Props
  const { children } = props;

  // Hooks
  const { isAndroid } = usePlatform();

  const getStatuBarHeight = (StatusBar.currentHeight ?? 24) - 14;

  // Custom Css
  const styles = StyleSheet.create({
    AndroidSafeArea: {
      paddingTop: isAndroid ? getStatuBarHeight : 0,
    },
  });

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View className="w-full px-6">{children}</View>
    </SafeAreaView>
  );
};

export default Container;
