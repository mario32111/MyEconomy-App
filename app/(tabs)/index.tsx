import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  const url = 'https://mario32111.github.io/MyEconomy/';

  const handleShouldStartLoadWithRequest = (event) => {
    // Permitir todas las solicitudes
    return true; 
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webView}
        onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
        javaScriptEnabled={true} // Permite JavaScript
        domStorageEnabled={true} // Permite almacenamiento en el DOM
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});
