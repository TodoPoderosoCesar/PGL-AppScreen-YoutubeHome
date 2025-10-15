import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'

export default function HeaderNav() {

    return (
    <ScrollView horizontal style={styles.headerNav}>
        <Pressable style={styles.button} onPress={() => alert('Tampoco te flipes')}>
            <Text style={{ color: '#fff' }}>Icono</Text>
        </Pressable><Pressable style={styles.button} onPress={() => alert('Tampoco te flipes')}>
            <Text style={{ color: '#fff' }}>All</Text>
        </Pressable><Pressable style={styles.button} onPress={() => alert('Tampoco te flipes')}>
            <Text style={{ color: '#fff' }}>Gaming</Text>
        </Pressable><Pressable style={styles.button} onPress={() => alert('Tampoco te flipes')}>
            <Text style={{ color: '#fff' }}>League of Legends</Text>
        </Pressable>
    </ScrollView>
    )
}

const styles = StyleSheet.create({ 
    headerNav: {
    borderColor: '#fff',
    flexDirection: 'row',
    color: '#fff',
  },
  button: {
    marginRight: 20,
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
  }
})