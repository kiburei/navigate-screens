import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AtmWithdraw extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Withdraw money From ATM</Text>
      </View>
    );
  }
}
