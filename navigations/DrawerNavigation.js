import { createDrawerNavigator } from "@react-navigation/drawer";

import { ListPlaneScreen } from "../screens/PlanesScreens";
import BottomNavigator from "./BottomNavigation";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#3f2f25",
        drawerActiveTintColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Planes"
        component={ListPlaneScreen}
        initialParams={{ type: "planes" }}
        options={{ title: "All Planes", headerStyle: {
            backgroundColor: "#351401",
          }, }}
      />
      <Drawer.Screen
        name="Not Planes"
        component={ListPlaneScreen}
        initialParams={{ type: "not planes" }}
        options={{ title: "Not Planes",  }}
      />
      <Drawer.Screen
        name="Bottom"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;