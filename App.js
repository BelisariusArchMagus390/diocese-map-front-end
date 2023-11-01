//import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import HomePage  from './src/pages/home'
import MapPage  from './src/pages/map'
import TutorialPage  from './src/pages/tutorial'

const Stack = createStackNavigator();

export function PagesStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Mapa" component={MapPage} />
            <Stack.Screen name="Tutorial" component={TutorialPage} />
        </Stack.Navigator>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <PagesStack/>
    </NavigationContainer>
  );
}