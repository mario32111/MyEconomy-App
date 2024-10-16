import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
  return (
    <WebView
      source={{ uri: 'http://tu-url-o-archivo-local.html' }} // Cambia esto por la URL o ruta del archivo
      style={styles.webview}
    />
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default WebViewScreen;
