import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

const LoginPanel = ({ slideAnim, toggleLoginPanel }: any) => {
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
          <Text style={styles.loginTitle}>Login</Text>
          {/* Add your login form or content here */}
          <TouchableOpacity
            onPress={toggleLoginPanel}
            style={styles.closeButton}
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
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
    right: 0, // Ensure it's aligned to the right
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
