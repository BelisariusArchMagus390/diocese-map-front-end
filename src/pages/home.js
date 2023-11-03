import { Pressable, StyleSheet, Text, View, SectionList } from 'react-native'
import DefaultLayout from '../layouts/default'

export default function MainPanel ({ navigation: { navigate } }) {
  return (
    <DefaultLayout>
      <View style={styles.container}>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#3F88EF'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  }
})
