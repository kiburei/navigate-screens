import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { bongzBlue } from './assets/colors';


export default class AtmWithdraw extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    let data = [{
      value: 'Standard Bank',
    }, {
      value: 'Absa',
    }, {
      value: 'FNB',
    }, {
      value: 'Nedbank',
    }, {
      value: 'Capitec Bank',
    }
  ];
    return (
      <View>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Withdraw From ATM</Text>
        </View>
        <Text style={{padding: 20, textAlign: 'center'}}>
          Request for a code to withdraw
          your money from an ATM.
          input the code in the ATM
          and withdraw
        </Text>
        <View style={styles.form}>
          <Text style={styles.header}>Frequently Used Banks</Text>
            <Dropdown
              data={data}
              />
            <Text style={styles.header}>Enter ATM Number</Text>
            <TextInput
              keyboardType="numeric"
              />
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Send Me My Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

{/* <Text style={styles.header}>Enter ATM Number</Text>
<TextInput
    keyboardType="numeric"
/> */}

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
