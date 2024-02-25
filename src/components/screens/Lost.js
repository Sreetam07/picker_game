import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Lost = ({ navigation }) => {
  const handlePlayAgain = () => {
    navigation.navigate("Game");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You Lost!</Text>
      <Button title="Play Again" onPress={handlePlayAgain} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Lost;
