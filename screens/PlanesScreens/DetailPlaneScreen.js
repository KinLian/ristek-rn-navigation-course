import { StyleSheet, Text, View } from "react-native";

function DetailPlaneScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text>Detail Plane Screen !!!</Text>
      <Text>---------------------------------------</Text>
      <Text>{route.params.name}</Text>
      <Text>{route.params.desc}</Text>
    </View>
  );
}

export default DetailPlaneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
