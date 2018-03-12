import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { bongzBlue } from './assets/colors';


export default class AgentWithdraw extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    let data = [{
      value: 'Kwa Zulu Natal',
    }, {
      value: 'Malema Stores',
    }, {
      value: 'Xhobuku',
    }
  ];
    return (
      <View>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Withdraw From Agent</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.header}>Frequently Used Agents</Text>
            <Dropdown
              data={data}
              />
          <Text style={styles.header}>Enter Agnet Number</Text>
            <TextInput
              keyboardType="numeric"
              />
          <Text style={styles.header}>Enter Amount</Text>
          <TextInput
            keyboardType="numeric"
            />
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Withdraw</Text>
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
