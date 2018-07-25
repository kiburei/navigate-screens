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
                tabBarIcon: (({focused}) => {
                    return focused ? <Image source={require('../assets/icons/new/ic_transact_active.png')} style={{width:20, height: 20}} />
                    : <Image source={require('../assets/icons/new/ic_transact.png')} style={{width:20, height: 20}} /> ;
                })
            },
        },
        Messages: { 
            screen: MessageScreen,
            navigationOptions: {
                tabBarLabel: 'Messages',
                tabBarIcon: ({focused}) => {
                    return focused ? <Image source={require('../assets/icons/new/ic_message_active.png')} style={{width:20, height: 20}} />
                    : <Image source={require('../assets/icons/new/ic_message.png')} style={{width:20, height: 20}} /> ;
                },
            },
        }, 
        Cards: { 
            screen: CardScreen,
            navigationOptions: {
                tabBarLabel: 'Cards',
                tabBarIcon: ({focused}) => {
                    return focused ? <Image source={require('../assets/icons/new/ic_credit_card_active.png')} style={{width:20, height: 20}} />
                    : <Image source={require('../assets/icons/new/ic_credit_card.png')} style={{width:20, height: 20}} /> ;
                }
                
            },
        }, 
        Statements: { 
            screen: StatementScreen,
            navigationOptions: {
                tabBarLabel: 'Statements',
                tabBarIcon: ({focused}) => {
                    return focused ? <Image source={require('../assets/icons/new/ic_statement_active.png')} style={{width:20, height: 20}} />
                    : <Image source={require('../assets/icons/new/ic_statement.png')} style={{width:20, height: 20}} /> ;
                },
            },
        }, 
        Profile: { 
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({focused}) => {
                    return focused ? <Image source={require('../assets/icons/new/ic_profile_active.png')} style={{width:20, height: 20}} />
                    : <Image source={require('../assets/icons/new/ic_profile.png')} style={{width:20, height: 20}} /> ;
                },
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