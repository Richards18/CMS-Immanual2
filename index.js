import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppRouter from './src/Router/AppRouter';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ✅ 1. Background message handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Handled in background:', remoteMessage);
  const verse = remoteMessage?.data?.verse || remoteMessage?.notification?.body;
  if (verse) {
    await AsyncStorage.setItem('bibleVerse', verse);
  }
});

// ✅ 2. App opened from background
messaging().onNotificationOpenedApp(async remoteMessage => {
  const verse = remoteMessage?.data?.verse || remoteMessage?.notification?.body;
  if (verse) {
    await AsyncStorage.setItem('bibleVerse', verse);
  }
});

// ✅ 3. App opened from quit (killed state)
messaging()
  .getInitialNotification()
  .then(async remoteMessage => {
    const verse = remoteMessage?.data?.verse || remoteMessage?.notification?.body;
    if (verse) {
      await AsyncStorage.setItem('bibleVerse', verse);
    }
  });

AppRegistry.registerComponent(appName, () => AppRouter);
