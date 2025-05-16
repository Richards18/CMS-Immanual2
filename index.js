/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import AppRouter from './src/Router/AppRouter';

AppRegistry.registerComponent(appName, () => AppRouter);
