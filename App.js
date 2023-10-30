//import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import Home from './src/pages/Home'
import Map from './src/pages/Map'
import Tutorial from './src/pages/Tutorial'

const Stack = createStackNavigator();

export function PagesStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Mapa" component={Map} />
            <Stack.Screen name="Tutorial" component={Tutorial} />
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