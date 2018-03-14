import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MessageScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Messages!</Text>
        <Button
          title="Go to My Cards"
          onPress={() => this.props.navigation.navigate('Cards')}
        />
      </View>
    );
  }
}
