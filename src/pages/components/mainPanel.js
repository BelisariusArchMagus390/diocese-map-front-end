import {Image, View} from 'react-native';
import genericStyles from '../../styles/GenericStyle'

export function MainPanel() {
  return (
    <View style={genericStyles.container}>
      <Image
        style={genericStyles.image}
        source={require("../../assets/diocese_icon.png")}
      />
    </View>
  );
};