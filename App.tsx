import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import HeaderNav from './components/HeaderNav';
import Video from './components/Video';
import Ionicons from '@expo/vector-icons/Ionicons';
import Footer from './components/TabBar';
import TabBar from './components/TabBar';
import { VIDEO_DATA } from './data/video-data';
import Short from './components/Short';
import { SHORT_DATA } from './data/shorts-data';

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
        <ScrollView style={styles.bodyScroll} showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'flex-start' }}>
          <Video
            title={VIDEO_DATA[0].title}
            creator={VIDEO_DATA[0].creator}
            views={VIDEO_DATA[0].views}
            updated={VIDEO_DATA[0].updated}
            videoSource={VIDEO_DATA[0].videoSource}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 20, marginBottom: 10}}>
            <Ionicons name="sparkles-outline" size={40} color="white" style={{textAlign: 'center'}}/>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: 10, marginBottom: 10}}>Shorts</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {
            SHORT_DATA.map((ShortItem) => (
              <Short 
                videoSource={ShortItem.videoSource}
              />
            ))}
          </ScrollView>
          <Video
            title={VIDEO_DATA[0].title}
            creator={VIDEO_DATA[0].creator}
            views={VIDEO_DATA[0].views}
            updated={VIDEO_DATA[0].updated}
            videoSource={VIDEO_DATA[0].videoSource}
          />
          <Video
            title={VIDEO_DATA[0].title}
            creator={VIDEO_DATA[0].creator}
            views={VIDEO_DATA[0].views}
            updated={VIDEO_DATA[0].updated}
            videoSource={VIDEO_DATA[0].videoSource}
          />
        </ScrollView>
      </View>
      <View style={styles.footer}>
            <TabBar />  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3.3,
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
  bodyScroll: {
    width: '100%',
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
  },
  footer: {
    flex: 2,
    backgroundColor: '#0f0f0f',
    borderTopWidth: 1,
    borderTopColor: '#3f3f3f',
  }
});
