import React, { useEffect } from "react";
import { SafeAreaView, Image } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import Signin from "./src/screens/auth/Signin";
import Home from "./src/screens/app/Home";
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./src/utils/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const WEB_CLIENT_ID = "265793183716-1lj9dn1pm8ricjug75llgo6vn4g75b1i.apps.googleusercontent.com"
const IOS_CLIENT_ID = "265793183716-t874o5hkj40v3f2g7dtn6u0ir568cglf.apps.googleusercontent.com"
const REVERSED_CLIENT_ID = "com.googleusercontent.apps.265793183716-t874o5hkj40v3f2g7dtn6u0ir568cglf"
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  colors: {
    background: colors.white
  }
}


  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
  
            if (route.name === "Home") {
              icon = focused
                ? require("./src/assets/tabs/home_active.png")
                : require("./src/assets/tabs/home.png");
            } else if (route.name === "Favorites") {
              icon = focused
                ? require("./src/assets/tabs/bookmark_active.png")
                : require("./src/assets/tabs/bookmark.png");
            } else if (route.name === "Profile") {
              icon = focused
                ? require("./src/assets/tabs/profile_active.png")
                : require("./src/assets/tabs/profile.png");
            }
  
            return <Image source={icon} style={{ width: 24, height: 24 }} />;
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { borderTopColor: colors.lightGray },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

const App = () => {

  const isSignedIn = true

  useEffect(() => {GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });}, [])



  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};


export default App