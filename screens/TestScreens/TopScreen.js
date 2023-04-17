import { StyleSheet, Text, View } from "react-native";

function TopScreen() {
  return (
    <View style={styles.container}>
      <Text>Top Screen !!!</Text>
    </View>
  );
}

export default TopScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
