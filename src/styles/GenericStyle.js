import { StyleSheet } from 'react-native'

const genericStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#367BC1'
    // opacity: 0.9
  },
  image: {
    width: 227.85,
    height: 262.64,
    flexShrink: 0,
    marginBottom: 302.36,
    marginTop: 75,
    marginRight: 71,
    marginLeft: 71
  },
  panel: {
    width: window.width, // Largura igual à largura da tela
    height: window.height, // Altura igual à altura da tela
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo com opacidade
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})

export default genericStyles
