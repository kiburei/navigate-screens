import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bongzBlue } from './assets/colors';

export default class QrCode extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Pay Using QR Code</Text>
        </View>
        <View style={styles.header}>
          <Text style={{color: bongzBlue, fontSize: 20}}>Scan QR Code</Text>
        </View>
        <View style={styles.main}>
          <Text style={{color: 'white'}}>Camera</Text>
          <Text style={{color: 'white'}}>Frame</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    padding: 15,
    backgroundColor: bongzBlue,
  },
  bannerText: {
    paddingLeft: 20,
    textAlign: 'left',
    color: 'white',
    fontSize: 25,
  },
  main: {
    flex: 9,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
