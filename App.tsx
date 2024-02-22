import React, {useEffect} from "react";
import { SafeAreaView } from "react-native";
import Splash from "./ios/src/screens/auth/Splash/";
import Signup from "./ios/src/screens/auth/Signup/";
import { GoogleSignin } from '@react-native-google-signin/google-signin';



const WEB_CLIENT_ID = "265793183716-1lj9dn1pm8ricjug75llgo6vn4g75b1i.apps.googleusercontent.com"
const IOS_CLIENT_ID = "265793183716-t874o5hkj40v3f2g7dtn6u0ir568cglf.apps.googleusercontent.com"
const REVERSED_CLIENT_ID = "com.googleusercontent.apps.265793183716-t874o5hkj40v3f2g7dtn6u0ir568cglf"

const App = () => {
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
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  )
}

export default App