// In App.js in a new project

import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SplashScreen from './screens/SplashScreen';
import OnBoarding from './screens/OnBoarding';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import RiwayatTransaksi from './screens/RiwayatTransaksi';
import Pesan from './screens/Pesan';
import Profil from './screens/Profil';
import DataHewan from './screens/DataHewan';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('./icon/home_actived.png')
                  : require('./icon/home_notactived.png')
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Riwayat Transaksi"
        component={RiwayatTransaksi}
        options={{
          tabBarLabel: 'Riwayat Transaksi',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('./icon/history_actived.png')
                  : require('./icon/history_notactived.png')
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('./icon/profile_actived.png')
                  : require('./icon/profile_notactived.png')
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pesan"
        component={Pesan}
        options={{
          tabBarLabel: 'Pesan',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={
                focused
                  ? require('./icon/message_actived.png')
                  : require('./icon/message_notactived.png')
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
        <Stack.Screen name="DataHewan" component={DataHewan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
