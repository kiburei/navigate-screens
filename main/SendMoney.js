import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SendMoney extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Send Money to other Bonz user</Text>
      </View>
    );
  }
}
