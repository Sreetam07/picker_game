import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pickCoins } from "../redux/actions";

export default function GamePlay({ navigation }) {
  const coinsLeft = useSelector((state) => state.reducer.game.coinsLeft);

  const dispatch = useDispatch();

  const handlePickCoins = (pickedCoins) => {
    dispatch(pickCoins(pickedCoins));
    if (coinsLeft - pickedCoins <= 0) {
      navigation.navigate("Lost");
    } else {
      aiPick();
    }
  };

  const aiPick = () => {
    const aiPicked = Math.floor(Math.random() * Math.min(4, coinsLeft)) + 1;
    dispatch(pickCoins(aiPicked));
    if (coinsLeft - aiPicked <= 0) {
      navigation.navigate("Lost");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coins left: {coinsLeft}</Text>
      <Button title="Pick 1" onPress={() => handlePickCoins(1)} />
      <Button title="Pick 2" onPress={() => handlePickCoins(2)} />
      <Button title="Pick 3" onPress={() => handlePickCoins(3)} />
      <Button title="Pick 4" onPress={() => handlePickCoins(4)} />
    </View>
  );
}

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
