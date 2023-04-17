import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { TopScreen } from "../screens/TestScreens";

const Top = createMaterialTopTabNavigator();

function TopNavigator() {
  return (
    <Top.Navigator tabBarPosition="top">
      <Top.Screen
        name="Top One"
        component={TopScreen}
        options={{ title: "Top One" }}
      />
      <Top.Screen
        name="Top Two"
        component={TopScreen}
        options={{ title: "Top Two" }}
      />
    </Top.Navigator>
  );
}

export default TopNavigator;
