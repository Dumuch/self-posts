import * as Font from 'expo-font'

export async function bootsrap() {
  await Font.loadAsync({
    'open-bold': require('../assets/fonts/OpensSans-Bold.ttf'),
    'open-regular': require('../assets/fonts/OpensSans-Regular.ttf')
  })
}