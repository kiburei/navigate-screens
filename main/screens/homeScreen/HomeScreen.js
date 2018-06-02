import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import GridView from 'react-native-super-grid';
import styles from './HomeScreen.styles';

var icon = [
            {image:require('../../assets/icons/qr.png')},
            {image:require('../../assets/icons/shop.png')},
            {image:require('../../assets/icons/agent.png')},
            {image:require('../../assets/icons/atm.png')},
            {image:require('../../assets/icons/send.png')},
            {image:require('../../assets/icons/request.png')},
          ];

export default class HomeScreen extends Component {
 static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.banner}>
          <Image source={require('../../assets/icons/banner.png')}
            style={{height: 55, width: 255}}/>
        </View>
        <View style={styles.main}>
          <View style={styles.slider}>
            <Image source={require('../../assets/icons/cards.png')}
              style={{height: 50, width: 300}}
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
      // <MainTabs/>
    );
  }
}

const items = [
  { name: 'Pay using QR Code', info: 'Pay for goods and services by scanning a QR code', link: 'QrCode', i: 1 },{ name: 'Pay using Shop No.', info: 'Pay for goods & services by entering shop number', link: 'ShopNo', i: 2 },
  { name: 'Withdraw from Agent', info: 'Withdraw some money from a Bongz Agent', link: 'AgentWithdraw', i: 3 },{ name: 'Withdraw from ATM', info: 'Withdraw money from ATM', link: 'AtmWithdraw', i: 4 },
  { name: 'Send Money to Others', info: 'Send money instantly to other Bongz user', link: 'SendMoney', i: 5 },{ name: 'Request Payment', info: 'Send QR code or number & request payment', link: 'ReceiveMoney', i: 6 },
];
