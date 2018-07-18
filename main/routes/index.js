import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';
import QrCode from '../QrCode';
import GridView from 'react-native-super-grid';
import { bongzBlue } from '../assets/colors';
import AgentWithdraw from '../AgentWithdraw';
import AtmWithdraw from '../AtmWithdraw';
import ReceiveMoney from '../ReceiveMoney';
import SendMoney from '../SendMoney';
import ShopNo from '../ShopNo';
import MessageScreen from '../screens/MessageScreen';
import CardScreen from '../screens/cardScreen';
import TransactScreen from '../screens/TransactScreen';
import StatementScreen from '../screens/StatementScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BongzCard from '../screens/BongzCard';
import HomeScreen from '../screens/homeScreen';
import IntroScreen from '../screens/introScreen';

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  QrCode: {
    screen: QrCode,
  },
  AgentWithdraw: {
    screen: AgentWithdraw,
  },
  AtmWithdraw: {
    screen: AtmWithdraw,
  },
  ReceiveMoney: {
    screen: ReceiveMoney,
  },
  SendMoney: {
    screen: SendMoney,
  },
  ShopNo: {
    screen: ShopNo,
  },
  BongzCard: {
    screen: BongzCard,
  },
});


const MainTabs = TabNavigator({
        Home: { 
            screen: RootStack,
            navigationOptions: {
                tabBarLabel: 'Transact',
                tabBarIcon: ({focused}) => 
                <Icon 
                    type='ionicon' 
                    name={focused ? 'ios-home' : 'ios-home-outline'} 
                    size={30} 
                    color={focused ? bongzBlue : 'gray'}
                />,
            },
        },
        Messages: { 
            screen: MessageScreen,
            navigationOptions: {
                tabBarLabel: 'Messages',
                tabBarIcon: ({focused}) => 
                <Icon 
                    type='material-community' 
                    name={focused ? 'message-text' : 'message-text-outline'} 
                    size={30} 
                    color={focused ? bongzBlue : 'gray'}
                />,
            },
        }, 
        Cards: { 
            screen: CardScreen,
            navigationOptions: {
                tabBarLabel: 'Cards',
                tabBarIcon: ({focused}) => 
                <Icon 
                    type='ionicon' 
                    name={focused ? 'ios-card' : 'ios-card-outline'} 
                    size={30} 
                    color={focused ? bongzBlue : 'gray'}
                />,
            },
        }, 
        Statements: { 
            screen: StatementScreen,
            navigationOptions: {
                tabBarLabel: 'Statements',
                tabBarIcon: ({focused}) => 
                <Icon 
                    type='ionicon' 
                    name={focused ? 'ios-paper' : 'ios-paper-outline'} 
                    size={30} 
                    color={focused ? bongzBlue : 'gray'}
                />,
            },
        }, 
        Profile: { 
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({focused}) => 
                <Icon 
                    type='ionicon' 
                    name={focused ? 'ios-person' : 'ios-person-outline'} 
                    size={30} 
                    color={focused ? bongzBlue : 'gray'}
                />,
            },
        }, 
    },
    {
        tabBarOptions: {
            activeTintColor: bongzBlue,
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        navigationOptions: {
            header: null
        }
    }
);

const MainStack = StackNavigator(
    {
        Intro: {
        screen: IntroScreen,
        }, 
        Main: {
        screen: MainTabs, 
        }, 
    },
    {
        navigationOptions: {
            header: null
        },
        gesturesEnabled: false
    }
);
export default class App extends Component {
    render() {
        return <MainStack />
    }
}