import {ImageBackground, Image, View, Text} from 'react-native'
import genericStyles from '../styles/GenericStyle'
import homeStyles from '../styles/HomeStyle'

export default function MainPanel() {
  return (
    <View style={genericStyles.container}>
      <ImageBackground 
        source={require("../assets/images/diocese_icon.png")}
        resizeMode="cover" style={genericStyles.image}>

        <View style={genericStyles.panel}>
          <Text>Conteúdo do painel</Text>
        </View>

      </ImageBackground>
    </View>
  );
};