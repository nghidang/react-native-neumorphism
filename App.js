import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View} from 'react-native';
import NeuView from './src/components/NeumorphismView';

const NeuViewContainer = (pressed = false) => {
  return (
    <View style={styles.rowContainer}>
      <NeuView
        style={styles.neuView}
        shadowDistance={5}
        pressed={pressed}></NeuView>
      <NeuView
        style={styles.neuView}
        shadowDistance={5}
        radius={styles.neuView.height / 2}
        pressed={pressed}></NeuView>
    </View>
  );
};

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        {NeuViewContainer()}
        {NeuViewContainer(true)}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55b9f3',
    justifyContent: 'space-evenly',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  neuView: {
    width: 100,
    height: 100,
  },
});

export default App;
