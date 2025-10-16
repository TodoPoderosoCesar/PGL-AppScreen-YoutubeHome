import { StyleSheet, Image, ImageSourcePropType, Text, View, Button, Pressable, ScrollView, Alert } from 'react-native'
import React from 'react'

type ShortProps = {
  videoSource: ImageSourcePropType
}

const Short: React.FC<ShortProps> = (props: ShortProps): React.ReactNode => {

  const {videoSource} = props

  return (
  <View style={styles.container}>
    <Image source={videoSource} style={{width: 100, height: 200, borderRadius: 10, marginRight: 10}}/>
  </View>
  )
}

export default Short

const styles = StyleSheet.create({ 
  container: {
    marginLeft: 10,
    paddingBottom: 30,
  }
})