import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HeaderNav() {

    return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.headerNav}>
        <Pressable style={styles.firstButton} onPress={() => alert('Tampoco te flipes')}>
            <Ionicons name="compass-outline" size={35} color="white" style={styles.buttonIcon}/>
        </Pressable>

        <Pressable style={styles.button} onPress={() => alert('Tampoco te flipes')}>
            <Text style={styles.buttonText}>All</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => alert('Tampoco te flipes')}>
            <Text style={styles.buttonText}>Gaming</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => alert('Tampoco te flipes')}>
            <Text style={styles.buttonText}>League of Legends</Text>
        </Pressable>
    </ScrollView>
    )
}

const styles = StyleSheet.create({ 
    headerNav: {
    borderColor: '#fff',
    flexDirection: 'row',
    color: '#fff',
    marginBottom: 5,
  },
  button: {
    marginRight: 20,
    color: '#fff',
    backgroundColor: '#272727',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  firstButton: {
    marginRight: 20,
    color: '#fff',
    backgroundColor: '#272727',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonIcon: {
    marginLeft: 10,
    marginRight: 10
  }
})