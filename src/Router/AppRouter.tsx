import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as ReduxProvider} from 'react-redux';
import store from '../Redux/Store';
import {AuthProvider} from '../Redux/AuthProviders';
import {SCREENS} from '../Constants/ScreenNames';
import SplashScreen from '../Screens/Viewer/Splash/SplashScreen';
import HomeController from '../Screens/Controller/Home/HomeController';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomMenuBar from './CustomMenuBar';
import PrayReqController from '../Screens/Controller/PrayRequest/PrayReqController';
import OurChurchController from '../Screens/Controller/OurChurch/OurChurchController';
import NewsController from '../Screens/Controller/News/NewsController';
import GalleryController from '../Screens/Controller/Gallery/GalleryController';
import WomensFestival from '../Screens/Viewer/Gallery/WomensFest/WomensFestival';
import HemaJohn from '../Screens/Viewer/Gallery/HemaJohn/HemaJohn';
import BhajanSermon from '../Screens/Viewer/Gallery/BhajanSermon/BhajanSermon';
import Asanam2023 from '../Screens/Viewer/Gallery/Asanam2023/Asanam2023';
import VBS2023 from '../Screens/Viewer/Gallery/VBS2023/VBS2023';
import Xmas2018 from '../Screens/Viewer/Gallery/Xmas2018/Xmas2018';
import Xmas2012 from '../Screens/Viewer/Gallery/Xmas2012/Xmas2012';
import HillPeople from '../Screens/Viewer/Gallery/HillPeople/HillPeople';
import SilverJubilee from '../Screens/Viewer/Gallery/SilverJubilee/SilverJubilee';
import DiamondJubilee from '../Screens/Viewer/Gallery/DiamondJubilee/DiamondJubilee';
import DiamondJubileeNews from '../Screens/Viewer/News/DiamondJubileeNews/DiamondJubileeNews';
import HemaJohnConcert from '../Screens/Viewer/News/HemaJohnConcert/HemaJohnConcert';
import WomensFestNews from '../Screens/Viewer/News/WomensFest/WomensFestNews';
import ContactController from '../Screens/Controller/Contact/ContactController';
import Events from '../Modal/Events';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.SPLASH_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={SCREENS.HOME_SCREEN} component={HomeController} />
      <Stack.Screen name={SCREENS.NEWS_SCREEN} component={NewsController} />
      <Stack.Screen name={SCREENS.EVENTS_SCREEN} component={Events} />
      <Stack.Screen
        name={SCREENS.GALLERY_SCREEN}
        component={GalleryController}
      />
      <Stack.Screen name={SCREENS.WOMENS_FEST} component={WomensFestival} />
      <Stack.Screen name={SCREENS.HEMA_JOHN} component={HemaJohn} />
      <Stack.Screen name={SCREENS.BHAJAN_SERMON} component={BhajanSermon} />
      <Stack.Screen name={SCREENS.ASANAM_2023} component={Asanam2023} />
      <Stack.Screen name={SCREENS.VBS_2023} component={VBS2023} />
      <Stack.Screen name={SCREENS.XMAS_2018} component={Xmas2018} />
      <Stack.Screen name={SCREENS.XMAS_2012} component={Xmas2012} />
      <Stack.Screen name={SCREENS.HILL_PEOPLE} component={HillPeople} />
      <Stack.Screen name={SCREENS.SILVER_JUBILEE} component={SilverJubilee} />
      <Stack.Screen name={SCREENS.DIAMOND_JUBILEE} component={DiamondJubilee} />

      <Stack.Screen name={SCREENS.PRAY_REQUEST} component={PrayReqController} />
      <Stack.Screen name={SCREENS.OUR_CHURCH} component={OurChurchController} />
      <Stack.Screen
        name={SCREENS.CONTACT_SCREEN}
        component={ContactController}
      />
      <Stack.Screen
        name={SCREENS.DIAMONDJUBI_NEWS}
        component={DiamondJubileeNews}
      />
      <Stack.Screen name={SCREENS.HEMA_JOHN_NEWS} component={HemaJohnConcert} />
      <Stack.Screen
        name={SCREENS.WOMENS_FEST_NEWS}
        component={WomensFestNews}
      />
    </Stack.Navigator>
  );
};

const AppRouter: React.FC = () => {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <AuthProvider>
          <Drawer.Navigator
            drawerContent={props => <CustomMenuBar {...props} />}
            screenOptions={{
              headerShown: false,
              drawerPosition: 'right',
              drawerType: 'front',
              overlayColor: 'rgba(0,0,0,0.5)',
              drawerStyle: {
                width: '70%',
                backgroundColor: '#fff',
              },
            }}>
            <Drawer.Screen name="MainApp" component={MainStack} />
          </Drawer.Navigator>
        </AuthProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
};

export default AppRouter;
