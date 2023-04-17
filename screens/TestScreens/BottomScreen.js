import { StyleSheet, Text, View } from "react-native";

function BottomScreen() {
  return (
    <View style={styles.container}>
      <Text>Bottom Screen !!!</Text>
    </View>
  );
}

export default BottomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
