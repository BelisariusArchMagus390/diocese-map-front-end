import { createStackNavigator } from '@react-navigation/stack';
import {Home} from './pages/home'
import {Map} from './pages/map'
import {Tutorial} from './pages/tutorial'

const Stack = createStackNavigator();

export function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Mapa" component={Map} />
            <Stack.Screen name="Tutorial" component={Tutorial} />
        </Stack.Navigator>
    );
}