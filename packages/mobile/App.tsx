/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { add } from 'shared-lib';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log(add(7, 2));
        }}>
        <Text style={styles.buttonTitle}>Run Add function</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  buttonTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
