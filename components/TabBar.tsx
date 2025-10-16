import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabBar() {

    return (
        <View style={styles.tabBar}>
            <View style={styles.item}>
                <Ionicons name="home" size={40} color="white" style={{textAlign: 'center'}}/>
                <Text style={{color: 'white', textAlign: 'center'}}>Home</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name="sparkles-outline" size={40} color="white" style={{textAlign: 'center'}}/>
                <Text style={{color: 'white', textAlign: 'center'}}>Shorts</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name="add-circle-outline" size={60} color="white"/>
            </View>
            <View style={styles.item}>
                <Ionicons name="folder-outline" size={40} color="white" style={{textAlign: 'center'}}/>
                <Text style={{color: 'white', textAlign: 'center'}}>Subscriptions</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name="layers-outline" size={40} color="white" style={{textAlign: 'center'}}/>
                <Text style={{color: 'white', textAlign: 'center'}}>Home</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({ 
    tabBar: {   
        flexDirection: 'row',
        // alignItems: 'center',
        margin: 0,
        padding: 0,
        justifyContent: 'space-around',
        marginTop: 5,
    },
    item: {
        alignItems: 'center',
        margin: 0,
        padding: 0,
        marginLeft: 10,
    }
})