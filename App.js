import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, {flex:1}]}>
          Hello, World!
        </Text>
        <Text style={[styles.welcome, {flex:2}]}>
          Hello, World!
        </Text>
        <Text style={[styles.welcome, {flex:1}]}>
          Hello, World!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'orange',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rosybrown',
    margin: 20,
  },
});
