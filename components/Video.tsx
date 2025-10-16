import { StyleSheet, Image, ImageSourcePropType, Text, View, Button, Pressable, ScrollView, Alert } from 'react-native'
import React from 'react'

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
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.creator}>{creator}</Text>
    <Text style={styles.views}>{views}M views - {updated}</Text>
  </View>
  )
}

export default Video

const styles = StyleSheet.create({ 
  container: {
    width: '100%',
    // backgroundColor: '#fff',
    // alignItems: 'flex-start',
    padding: 0
  },
  video: {
    resizeMode: 'contain',
    width: 'auto',
  }, 
  title: {
  },
  creator: {
    color: 'gray',
  },
  views: {
    color: 'gray',
    paddingBottom: 10,
  }
})