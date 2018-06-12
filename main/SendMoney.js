import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { bongzBlue } from './assets/colors';
import Recipients from "./assets/recipients.json";


export default class SendMoney extends Component {
    static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Send Money</Text>
        </View>
        <View style={styles.form}>
            <Text style={styles.header}>Enter Recipient Mobile Number or Bongz ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </Text>
            <TextInput
              keyboardType="numeric"
            />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('QrCode')}
                style={styles.button}>
                <Text style={{color: 'white'}}>Open Scanner</Text>
              </TouchableOpacity>
          <Text style={styles.header}>Enter Amount</Text>
          <TextInput
            keyboardType="numeric"
            />
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    padding: 15,
    backgroundColor: bongzBlue,
  },
  bannerText: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 25,
  },
  header: {
    fontSize: 20,
    color: bongzBlue,
  },
  button: {
    backgroundColor: bongzBlue,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: 20
  },
});
