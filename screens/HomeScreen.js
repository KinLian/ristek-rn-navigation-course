import { Button, StyleSheet, View } from "react-native";

function HomeScreen({ route, navigation }) {

  function pressHandler(destination, type) {
    if (type === "navigate") navigation.navigate(destination);
    else if (type === "replace") navigation.replace(destination);
    else if (type === "push") navigation.push(destination);
    else if (type === "first") navigation.popToTop();
    else if (type === "back") navigation.goBack();
    else if (type === "reset")
      navigation.reset({
        routes: [
          {
            name: destination,
            params: {},
          },
        ],
      });
    else {
      navigation.navigate("Planes Drawer", {
        screen: "Not Planes",
        params: {},
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.typeTest}>
        <Button
          onPress={() => pressHandler("Home Screen", "navigate")}
          title="Home Screen"
        />
        <Button
          onPress={() => pressHandler("Stack Screen", "navigate")}
          title="Stack Screen"
        />
        <Button
          onPress={() => pressHandler("Stack Screen", "replace")}
          title="Replace with Stack Screen"
        />
        <Button
          onPress={() => pressHandler("Stack Screen", "reset")}
          title="Reset with Stack Screen"
        />
        <Button
          onPress={() => pressHandler("Home Screen", "push")}
          title="Home Screen again (what ?)"
        />
        <Button
          onPress={() => pressHandler(null, "first")}
          title="Go back to first"
        />
        <Button onPress={() => pressHandler(null, "back")} title="Go back" />
      </View>

      <View style={styles.listOfScreens}>
        <Button
          title="Stack Screen"
          onPress={() => pressHandler("Stack Screen", "navigate")}
        />
        <Button
          title="List Planes Screen"
          onPress={() => pressHandler("Planes Drawer", "navigate")}
        />
        <Button
          title="Top Screen"
          onPress={() => pressHandler("Top", "navigate")}
        />
        <Button
          title="Bottom Screen"
          onPress={() => pressHandler("Bottom", "navigate")}
        />
        <Button
          title="Not List Planes Screen"
          onPress={() => pressHandler("Planes Drawer", "passToDrawer")}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  typeTest: {
    gap: 8,
  },
  listOfScreens: {
    gap: 4,
  },
});
