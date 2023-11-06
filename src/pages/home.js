import { Pressable, StyleSheet, Text, View, SectionList, Image } from 'react-native'
import DefaultLayout from '../layouts/default'

import localizationIconImage from '../assets/images/white_marker.png'

export default function MainPanel ({ navigation: { navigate } }) {
  return (
    <DefaultLayout>
      <View style={styles.container}>

        {/*
        <Text>Página inicial</Text>
        <SectionList
          style={{
            marginTop: 15,
            flexGrow: 0
          }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          sections={[
            {
              data: [
                { page: 'Mapa', text: 'Go to Mapa' },
                { page: 'Tutorial', text: 'Go to Tutorial' }
              ]
            }
          ]}
          renderItem={({ item }) => (
            <Pressable style={styles.button} onPress={() => navigate(item.page)}>
              <Text style={styles.text}>{item.text}</Text>
            </Pressable>
          )}
        />
        */}

        <View style={styles.startPanel}>
          <Pressable style={styles.buttonLocalization}>
            <Image source={localizationIconImage} style={styles.locIconImage}/>
            <Text style={styles.textButton}>LOCALIZAR-ME</Text>
          </Pressable>
        </View>

      </View>
    </DefaultLayout>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  startPanel:{
    width: 300,
    height: 339,
    flexShrink: 0,
    borderDadius: 2,
    backgroundColor: 'rgba(101, 158, 237, 0.60)',
    marginBottom: 67,
    marginTop: 234,
    marginRight: 30,
    marginLeft: 30,
  },
  buttonLocalization: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    //paddingVertical: 12,
    //paddingHorizontal: 32,
    //borderRadius: 4,
    //elevation: 3,
    backgroundColor: '#3F88EF',
    width: 219,
    height: 60,
    flexShrink: 0,
    marginBottom: 25,
    marginTop: 25,
    marginLeft: -1,
  },
  textButton: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    marginBottom: 1,
    marginTop: 1,
    marginRight: 24,
    marginLeft: 38,
  },
  locIconImage: {
    width: 24,
    height: 24,
    flexShrink: 0,
    marginBottom: 18,
    marginTop: 18,
    marginRight: 6,
    marginLeft: 8,
  },
})
