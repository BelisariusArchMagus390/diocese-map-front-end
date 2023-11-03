import { createStackNavigator } from '@react-navigation/stack'

import HomePage from './home'
import MapPage from './map'
import TutorialPage from './tutorial'

const Stack = createStackNavigator()

export function MainStack () {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomePage} options={{ header: StackHeader }} />
      <Stack.Screen name="Tutorial" component={TutorialPage} />
      <Stack.Screen name="Mapa" component={MapPage} />
    </Stack.Navigator>
  )
}

function StackHeader () {
  return null
}
