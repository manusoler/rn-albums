// Import a library to help create the component
import React from 'react';
import { AppRegistry, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View>
      <Header title="Albums" />
      <AlbumList />
    </View>
  </SafeAreaView>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
