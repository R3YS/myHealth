import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Introduce from "./src/screens/Introduce";
import Diet from "./src/screens/Diet";
import Activity from "./src/screens/Activity";
import WelcomePage from "./src/screens/WelcomePage";
import Settings from "./src/screens/Settings";

const DrawerNavigation = createDrawerNavigator({
  Introduce: Introduce,
  Diet: Diet,
  Activity: Activity,
  WelcomePage: WelcomePage,
  Settings: Settings
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Introduce: Introduce,
    Diet: Diet,
    Activity: Activity,
    WelcomePage: WelcomePage,
    Settings: Settings
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-500": require("./src/assets/fonts/roboto-500.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
