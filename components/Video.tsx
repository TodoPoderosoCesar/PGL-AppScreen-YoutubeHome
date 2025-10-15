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
        <View style={styles.videoContainer}>
            
        </View>
    )
}

export default Video

const styles = StyleSheet.create({ 
    videoContainer: {
        
    }
})