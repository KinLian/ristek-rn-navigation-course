import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

function StackScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Stack Screen !!!</Text>
      <Button
        icon="home"
        mode="contained"
        onPress={() => navigation.navigate("Home Screen")}
      >
        Home Screen (Navigate)
      </Button>
      <Button
        icon="home"
        mode="contained-tonal"
        onPress={() => navigation.replace("Home Screen")}
      >
        Home Screen (Replace)
      </Button>
      <Button
        icon="home"
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Home Screen" }],
          })
        }
      >
        Home Screen (Reset)
      </Button>
      <Button
        icon="stack-overflow"
        onPress={() =>
          navigation.reset({
            routes: [{ name: "Home Screen" }, { name: "Stack Screen" }],
          })
        }
      >
        Stack Screen (Reset to stack 1)
      </Button>
    </View>
  );
}

export default StackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
