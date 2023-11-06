import { ImageBackground, StyleSheet, View } from 'react-native'

import backgroundImage from '../assets/images/diocese_icon.png'
import { StatusBarProvider } from '../contexts/StatusBar'

// eslint-disable-next-line react/prop-types
export default function DefaultLayout ({ children }) {
  return (
    <StatusBarProvider style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image} resizeMode='contain' />
      <View style={styles.children}>
        {children}
      </View>
    </StatusBarProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  image: {
    //flex: 1,
    opacity: 0.2,
    width: 227.85,
    height: 262.64,
    flexShrink: 0,
    marginBottom: 302.36,
    marginTop: 75,
    marginRight: 71,
    marginLeft: 93,
  },
  children: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
})
