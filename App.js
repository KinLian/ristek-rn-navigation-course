import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import { StackScreen } from "./screens/TestScreens";
import { DetailPlaneScreen } from "./screens/PlanesScreens";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigator, DrawerNavigator, TopNavigator } from "./navigations";

const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home Screen">
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Planes Drawer" component={DrawerNavigator} />
            <Stack.Screen name="Bottom" component={BottomNavigator} />
          </Stack.Group>

          <Stack.Screen name="Top" component={TopNavigator} />
          <Stack.Screen
            name="Stack Screen"
            component={StackScreen}
            options={{ presentation: "card" }}
          />
          <Stack.Screen name="Detail Plane" component={DetailPlaneScreen} />

          <Stack.Screen
            name="Home Screen"
            component={HomeScreen}
            options={{
              title: "Home",
              headerStyle: { backgroundColor: "#28ABFC" },
              headerTitleStyle: { color: "white" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
