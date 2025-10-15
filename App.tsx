import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainter}>
          <Image style={styles.logo} source={require('./assets/youtube-icon.png')}/>
        </View>
      </View>
      <View style={styles.body}>

      </View>
      <View style={styles.footer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    backgroundColor: '#0f0f0f',
  },
  body: {
    flex: 14,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  headerContainter: {
    marginLeft: 20,
    marginTop: 30,
  },
});
