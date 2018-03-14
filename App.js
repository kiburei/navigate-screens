import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import QrCode from './main/QrCode';
import GridView from 'react-native-super-grid';
import { bongzBlue } from './main/assets/colors';
import AgentWithdraw from './main/AgentWithdraw';
import AtmWithdraw from './main/AtmWithdraw';
import ReceiveMoney from './main/ReceiveMoney';
import SendMoney from './main/SendMoney';
import ShopNo from './main/ShopNo';
import MessageScreen from './main/screens/MessageScreen';
import CardScreen from './main/screens/CardScreen';
import TransactScreen from './main/screens/TransactScreen';
import StatementScreen from './main/screens/StatementScreen';
import ProfileScreen from './main/screens/ProfileScreen';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Bongz Wallet</Text>
          <Text style={styles.bannerText}>Tap to Show Balance</Text>
          <Text style={styles.bannerMoney}>Show balance of selected card</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.slider}>
            <Text>Active Card</Text>
            <Text>xxxx-2332</Text>
          </View>
          <GridView
            itemDimension={130}
            items={items}
            renderItem={item => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(item.link)}
                style={styles.actions}>
                <Text style={styles.actionHeader}>{item.name}</Text>
                <Text>{item.info}</Text>
              </TouchableOpacity>
            )}
            />
        </View>
      </View>
    );
  }
}

const items = [
  { name: 'Pay using QR Code', info: 'Pay for goods and services by scanning a QR code', link: 'QrCode' },{ name: 'Pay using Shop No.', info: 'Pay for goods & services by entering shop number', link: 'ShopNo' },
  { name: 'Withdraw from Agent', info: 'Withdraw soem money from a Bongz Agent', link: 'AgentWithdraw' },{ name: 'Withdraw from ATM', info: 'Withdraw money from ATM', link: 'AtmWithdraw' },
  { name: 'Send Money to Others', info: 'Send money instantly to other Bongz user', link: 'SendMoney' },{ name: 'Request Payment', info: 'Send QR code or number & request payment', link: 'ReceiveMoney' },
];

const styles = StyleSheet.create({
  banner: {
    padding: 15,
    backgroundColor: bongzBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 25,
  },
  bannerMoney: {
    color: 'white'
  },
  main: {
    flex: 9,
    padding: 10,
  },
  slider: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 15,
    alignItems: 'center',
  },
  actionHeader: {
    fontSize: 20,
    color: bongzBlue,
  },
  actions: {
    padding: 15,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 15,
  },

});

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
});

const MessageStack = StackNavigator({
  Messages: { screen: MessageScreen },
  Cards: { screen: CardScreen },
});

const CardStack = StackNavigator({
  Transact: { screen: TransactScreen },
  Messages: { screen: MessageScreen },
});

export default TabNavigator({
  Messages: { screen: MessageScreen },
  Cards: { screen: CardScreen },
  Transact: { screen: TransactScreen },
  Statements: { screen: StatementScreen },
  Profile: { screen: ProfileScreen },
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
}
);


class App extends Component {
  render() {
    return <RootStack />;

  }
}
