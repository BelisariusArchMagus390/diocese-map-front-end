import { createStackNavigator } from '@react-navigation/stack'

import HomePage from './src/pages/home'
import MapPage from './src/pages/map'
import TutorialPage from './src/pages/tutorial'

const Stack = createStackNavigator()

export function MainStack () {
  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Mapa" component={MapPage} />
            <Stack.Screen name="Tutorial" component={TutorialPage} />
        </Stack.Navigator>
  )
}
