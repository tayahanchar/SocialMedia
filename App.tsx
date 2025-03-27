import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { styles } from './App.style';
import { Header } from './components/Header/Header';
import { UserStories } from './components/UserStories/UserStories';

function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Header />
      <UserStories />
    </SafeAreaView>
  );
}



export default App;
