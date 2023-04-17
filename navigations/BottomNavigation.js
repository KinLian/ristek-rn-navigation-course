import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { BottomScreen } from "../screens/TestScreens";

// const Bottom = createBottomTabNavigator();
const Bottom = createMaterialBottomTabNavigator();

function BottomNavigator() {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#fbfbfb" },
        tabBarActiveTintColor: "#3c0a6b",
      }}
    >
      <Bottom.Screen
        name="Bottom One"
        component={BottomScreen}
        options={{
          title: "Bottom One",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="Bottom Two"
        component={BottomScreen}
        options={{ title: "Bottom Two" }}
      />
    </Bottom.Navigator>
  );
}

export default BottomNavigator;
