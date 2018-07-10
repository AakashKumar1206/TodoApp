import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoLists from './Application/Components/TodoLists'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoLists />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
