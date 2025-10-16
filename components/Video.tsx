import { StyleSheet, Image, ImageSourcePropType, Text, View, Button, Pressable, ScrollView, Alert } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

type VideoProps = {
  title: string,
  creator: string,
  views: number,
  updated: string,
  videoSource: ImageSourcePropType
}

const Video: React.FC<VideoProps> = (props: VideoProps): React.ReactNode => {

  const {title, creator, views, updated, videoSource} = props

  return (
  <View style={styles.container}>
    <Image source={videoSource} style={styles.video}/>
    <View>

      <View style={styles.userTitle}>
        <Ionicons name="person-circle-outline" size={35} color="white" style={{paddingLeft: 5, paddingRight: 10}}/>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={{flexDirection: 'row', paddingLeft: 50,}}>
        <Text style={styles.creator}>{creator}</Text>
        <Text style={styles.views}>{views}M views - {updated}</Text>
      </View>

    </View>
  </View>
  )
}

export default Video

const styles = StyleSheet.create({ 
  container: {
    width: '100%',
    // backgroundColor: '#fff',
    // alignItems: 'flex-start',
    padding: 0,
    paddingBottom: 10,
  },
  video: {
    resizeMode: 'contain',
    width: 'auto',
    height: 295,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
  }, 
  userTitle: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingTop: 5, 
    paddingBottom: 5, 
    paddingRight: 10, 
    paddingLeft: 10
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 24,
  },
  creator: {
    color: 'gray',
    paddingLeft: 20,
  },
  views: {
    color: 'gray',
    paddingBottom: 10,
    paddingLeft: 10,
  }
})