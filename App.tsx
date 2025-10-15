import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import HeaderNav from './components/HeaderNav';
import Video from './components/Video';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainter}>
          <Ionicons name="logo-youtube" size={50} color="red" />
          <Text style={styles.headerTitle}>YouTube</Text>
          <View style={styles.right}>
            <Ionicons name="tv-outline" size={35} color="white" style={{paddingRight: 5}}/>
            <Ionicons name="notifications-outline" size={35} color="white" style={{paddingLeft: 5, paddingRight: 5}}/>
            <Ionicons name="search-outline" size={35} color="white" style={{paddingLeft: 5, paddingRight: 5}}/>
            <Ionicons name="person-circle-outline" size={35} color="white" style={{paddingLeft: 5, paddingRight: 10}}/>
          </View>
        </View>
        <HeaderNav />
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
    flex: 3,
    backgroundColor: '#0f0f0f',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
  },
  headerContainter: {
    marginLeft: 20,
    marginTop: 60,
    flexDirection: 'row',
    paddingBottom: 10,
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
  right: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center',
  }
});
