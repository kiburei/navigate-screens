import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { bongzBlue } from '../assets/colors'

export default class CardScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.banner}>
          <Text style={styles.header}>
            My Cards
          </Text>
        </View>
        <View style={styles.active}>
          <Text style={{textAlign: 'center', color: bongzBlue}}>Active Card</Text>
          <Text style={{fontSize: 6, textAlign: 'center'}}>Drag to Change</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.wallet}>
            <Text>Bongz Wallet</Text>
            <Text>Your Bongz ID: 22455457</Text>
            <Text>Account Balance: R. 20,000</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{color: 'white', fontSize: 12}}>Send Money</Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{color: 'white', fontSize: 12}}>More Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={{fontSize: 18, color: bongzBlue}}>Standard Bank</Text>
            <Text style={{fontSize: 12}}>Account Number: 22737985845</Text>
            <Text style={{fontSize: 12}}>Account Name: Andrew Mwangi</Text>
            <Text style={{fontSize: 12}}>Card Number: 22737985845</Text>
          </View>
          <View style={styles.card}>
            <Text style={{fontSize: 18, color: bongzBlue}}>Standard Bank</Text>
            <Text style={{fontSize: 12}}>Account Number: 22737985845</Text>
            <Text style={{fontSize: 12}}>Account Name: Andrew Mwangi</Text>
            <Text style={{fontSize: 12}}>Card Number: 22737985845</Text>
          </View>
          <View style={styles.card}>
            <Text style={{fontSize: 18, color: bongzBlue}}>Standard Bank</Text>
            <Text style={{fontSize: 12}}>Account Number: 22737985845</Text>
            <Text style={{fontSize: 12}}>Account Name: Andrew Mwangi</Text>
            <Text style={{fontSize: 12}}>Card Number: 22737985845</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    backgroundColor: bongzBlue,
    padding: 15,
  },
  header: {
    fontSize: 20,
    paddingLeft: 15,
    color: 'white',
  },
  active: {
    flex: 1,
  },
  main: {
    flex: 15,
  },
  wallet: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  card: {
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  button: {
    borderRadius: 20,
    backgroundColor: bongzBlue,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});
