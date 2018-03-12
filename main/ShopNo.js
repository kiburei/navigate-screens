import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { bongzBlue } from './assets/colors';
import { Dropdown } from 'react-native-material-dropdown';

export default class ShopNo extends Component {
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
      <View style={styles.main}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Pay using Shop No.</Text>
        </View>
        <View style={styles.shopId}>
          <View style={{flex: 1}}>
            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
             style={styles.image} />
          </View>
          <View style={{flex: 2}}>
            <Text style={styles.header}>Taj Cape Town</Text>
            <Text style={styles.headerSmall}>Bonz ID: <Text style={styles.details}>985658456</Text></Text>
            <Text style={styles.headerSmall}>Location: <Text style={styles.details}>Cape Town, SA</Text></Text>
            <Text style={styles.headerSmall}>Contacts: <Text style={styles.details}>+27 21 578 2545</Text></Text>
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.header}>Frequently Paid</Text>
          <Dropdown
            lable='Frequently Paid'
            data={data}
            />
          <Text style={styles.header}>Enter SHop Number</Text>
          <TextInput
            keyboardType='numeric'
            />
          <Text style={styles.header}>Enter Amount</Text>
          <TextInput
            keyboardType='numeric'
            />
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  banner: {
    padding: 15,
    backgroundColor: bongzBlue,
  },
  bannerText: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 25,
  },
  shopId: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  form: {
    padding: 20
  },
  image: {
    // borderStyle: 'solid',
    borderWidth: 3,
    borderColor: bongzBlue,
    borderRadius: 200,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    color: bongzBlue,
  },
  headerSmall: {
    color: bongzBlue,
  },
  details: {
    color: 'grey',
  },
  button: {
    backgroundColor: bongzBlue,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
