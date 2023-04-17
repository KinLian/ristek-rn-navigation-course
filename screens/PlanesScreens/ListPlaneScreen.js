import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

const data = [
  {
    name: "Aerospatiale ATR 42",
    desc: "Pesawat kecil",
  },
  {
    name: "Boeing 737 MAX 9",
    desc: "Pesawat sedang",
  },
  {
    name: "Airbus A350",
    desc: "Pesawat gede",
  },
  {
    name: "Airbus A380",
    desc: "Pesawat gede banget",
  },
];

const data_not_planes = [
  {
    name: "Pesawat sederhana",
    desc: "Aku suka mapel fisika !!!",
  },
  {
    name: "Pesawat kertas 365 hari",
    desc: "Lagunya JKT48",
  },
  {
    name: "Pesawat mainan",
    desc: "Inimah mainan doang kekw",
  },
];

function ListPlaneScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  function renderPlaneItem(item) {
    function pressHandler() {
      navigation.navigate("Detail Plane", item.item);
    }

    return (
      <View style={styles.card}>
        <Pressable
          onPress={pressHandler}
          style={styles.cardClick}
          android_ripple={{ color: "#ccc" }}
        >
          <Text style={styles.text}>{item.item.name}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <FlatList
      data={route.params.type === "planes" ? data : data_not_planes}
      keyExtractor={(item) => item.name}
      renderItem={renderPlaneItem}
      numColumns={2}
    />
  );
}

export default ListPlaneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,

    backgroundColor: "white",
  },
  cardClick: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "black",
  },
});
