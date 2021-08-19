import * as Font from 'expo-font';

export async function bootsrap() {

  await Font.loadAsync({
    'open-regular': require('./OpenSans-Regular.ttf')
  });
}
