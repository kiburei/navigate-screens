import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}