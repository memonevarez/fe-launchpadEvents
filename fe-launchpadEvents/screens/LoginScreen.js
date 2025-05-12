import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("Gui");
  const [password, setPassword] = useState("memo");

  const handleLogin = () => {
    // Placeholder for login logic
    if (username && password) {
      // Simulate a user login
      const mockUser = { id: 1, username: "memonevarez" };
      setUser(mockUser);
      navigation.replace("App");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 20, padding: 8 },
});
