"use dom";

import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export default function DomComponent() {
  return (
    <WebView
      style={styles.container}
      originWhitelist={["*"]}
      source={{ html: "<p><center>Hello world</center></p>" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "red",
  },
});
