import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

interface HomeNavigation {
  navigation: NavigationScreenProp<any, any>;
}

export default function HomeScreen({navigation}: HomeNavigation) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
