import React from "react";
import { SafeAreaView } from "react-native";
import Splash from "./ios/src/screens/auth/Splash/";
import Signup from "./ios/src/screens/auth/Signup/";

const App = () => {
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  )
}

export default App