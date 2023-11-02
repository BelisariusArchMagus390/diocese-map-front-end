import { NavigationContainer } from '@react-navigation/native'
import { MainStack } from './src/pages'

export default function App () {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  )
}
