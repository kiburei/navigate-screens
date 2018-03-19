import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
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

var icon = [
            {image:require('./main/assets/icons/qr.png')},
            {image:require('./main/assets/icons/shop.png')},
            {image:require('./main/assets/icons/agent.png')},
            {image:require('./main/assets/icons/atm.png')},
            {image:require('./main/assets/icons/send.png')},
            {image:require('./main/assets/icons/request.png')},
          ];

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
            <Image source={require('./main/assets/icons/cc.png')}
              style={{height: 70, width: 120}}
              />
            <Text>Active Card</Text>
            <Text style={{fontSize: 8}}>xxxx-2332</Text>
          </View>
          <GridView
            itemDimension={130}
            items={items}
            renderItem={item => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(item.link)}
                style={styles.actions}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <Image source = {item.i}
                      style={styles.icons}
                      />
                    <Text>{item[0]}</Text>
                  </View>
                  <View style={{flex: 2}}>
                    <Text style={styles.actionHeader}>{item.name}</Text>
                    <Text style={styles.actionText}>{item.info}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            />
        </View>
      </View>
    );
  }
}

const items = [
  { name: 'Pay using QR Code', info: 'Pay for goods and services by scanning a QR code', link: 'QrCode', i: 1 },{ name: 'Pay using Shop No.', info: 'Pay for goods & services by entering shop number', link: 'ShopNo', i: 2 },
  { name: 'Withdraw from Agent', info: 'Withdraw soem money from a Bongz Agent', link: 'AgentWithdraw', i: 3 },{ name: 'Withdraw from ATM', info: 'Withdraw money from ATM', link: 'AtmWithdraw', i: 4 },
  { name: 'Send Money to Others', info: 'Send money instantly to other Bongz user', link: 'SendMoney', i: 5 },{ name: 'Request Payment', info: 'Send QR code or number & request payment', link: 'ReceiveMoney', i: 6 },
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
    padding: 5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  actionHeader: {
    fontSize: 12,
    color: bongzBlue,
  },
  actionText: {
    fontSize: 10,
  },
  actions: {
    padding: 5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  icons: {
    width: 40,
    height: 40,
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
  Transact: { screen: HomeScreen },
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
