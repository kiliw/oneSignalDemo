import "../styles/globals.css";
import type { AppProps } from "next/app";
import OneSignal from "onesignal-cordova-plugin";
import { useEffect } from "react";

// Call this function when your app starts
function OneSignalInit(): void {
  // Uncomment to set OneSignal device logging to VERBOSE
  // OneSignal.setLogLevel(6, 0);

  // NOTE: Update the setAppId value below with your OneSignal AppId.
  OneSignal.setAppId("YOUR_ONESIGNAL_APP_ID");
  OneSignal.setNotificationOpenedHandler(function (jsonData) {
    console.log("notificationOpenedCallback: " + JSON.stringify(jsonData));
  });

  // iOS - Prompts the user for notification permissions.
  //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
  OneSignal.promptForPushNotificationsWithUserResponse(function (accepted) {
    console.log("User accepted notifications: " + accepted);
  });
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    OneSignalInit();
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
