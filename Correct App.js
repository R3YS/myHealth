import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Activity from "./src/screens/Activity";
import Diet from "./src/screens/Diet";
import Introduce from "./src/screens/Introduce";
import Settings from "./src/screens/Settings";
import Summary from "./src/screens/Summary";
import WelcomePage from "./src/screens/WelcomePage";

const DrawerNavigation = createDrawerNavigator({
  Introduce: Introduce,
  WelcomePage: WelcomePage,
  Diet: Diet,
  Activity: Activity,
  Summary: Summary,
  Settings: Settings
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Introduce: Introduce,
    WelcomePage: WelcomePage,
    Diet: Diet,
    Activity: Activity,
    Summary: Summary,
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
