import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import React from 'react';
import { PeopleScreen } from './screens/PeopleScreen';
import { ConnectsScreen } from './screens/ConnectsScreen';
import { HomeScreen } from './screens/HomeScreen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>HomeScreen</Text>
//       </View>
//     )
//   }
// }

// class ProfileScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>ProfileScreen</Text>
//       </View>
//     )
//   }
// }

// class HistoryScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>HistoryScreen</Text>
//       </View>
//     )
//   }
// }

// class CartScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>CartScreen</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        // tiitle: "hello"
        tabBarLabel: <Text style={{ fontSize: 15, textDecorationLine: 'underline', paddingBottom: 20 }}>Home</Text>,
      }
    },
    People: {
      screen: PeopleScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 15, textDecorationLine: 'underline' }}>People</Text>,
        activeColor: '#E8947F',
        inactiveColor: '#C4C9CB',
        // barStyle: { backgroundColor: '#2163f6' },
      }
    },
    Connects: {
      screen: ConnectsScreen,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 15, textDecorationLine: 'underline' }}>Connects</Text>,
        activeColor: '#E8947F',
        inactiveColor: '#C4C9CB',
        // barStyle: { backgroundColor: '#2c6d6a' },
      }
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#E8947F',
    inactiveColor: '#C4C9CB',
    barStyle: { backgroundColor: '#00000000' },
  }
);

export default createAppContainer(TabNavigator);

