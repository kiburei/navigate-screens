import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailsScreen from './main/Details';
import GridView from 'react-native-super-grid';
import { bongzBlue } from './main/assets/colors';

class HomeScreen extends Component {
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
              <View style={styles.actions}>
                <Text style={styles.actionHeader}>{item.name}</Text>
                <Text>{item.info}</Text>
              </View>
            )}
            />
        </View>
      </View>
    );
  }
}

const items = [
  { name: 'Pay using QR Code', info: 'Pay for goods and services by scanning a QR code' },{ name: 'Pay using Shop No.', info: 'Pay for goods & services by entering shop number' },
  { name: 'Withdraw from Agent', info: 'Withdraw soem money from a Bongz Agent' },{ name: 'Withdraw from ATM', info: 'Withdraw money from ATM' },
  { name: 'Send Money to Others', info: 'Send money instantly to other Bongz user' },{ name: 'Request Payment', info: 'Send QR code or number & request payment' },
];

const styles = StyleSheet.create({
  banner: {
    padding: 10,
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
    padding: 15,
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
    textAlign: 'left',
  },

});

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
