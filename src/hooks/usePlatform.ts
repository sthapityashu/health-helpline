// Defaults
import { useEffect, useState } from "react";
import { Platform } from "react-native";

const usePlatform = () => {
  // States
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Check if device is IOS
    setIsIOS(Platform.OS === "ios");

    // Check if device is Android
    setIsAndroid(Platform.OS === "android");
  }, []);

  return { isIOS, isAndroid };
};

export default usePlatform;
