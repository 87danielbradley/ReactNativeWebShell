import { SafeAreaView, StyleSheet } from 'react-native';

import React from 'react';
import { WebView } from 'react-native-webview';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      test
      <WebView source={{ uri: 'https://spectacular-ui.vercel.app/' }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
