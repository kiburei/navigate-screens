import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Image source={require('../assets/icons/bong_card.png')}
                  style={styles.image}
                  />
              </View>
              <View style={styles.bongzCard}>
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
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('BongzCard') }
                      style={styles.button}>
                      <Text style={{color: 'white', fontSize: 12}}>More Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={{flex: 2}}>
              <Image source={require('../assets/icons/cc.png')}
                style={styles.image}
                />
            </View>
            <View style={{flex: 3}}>
              <Text style={{fontSize: 18, color: bongzBlue}}>Standard Bank</Text>
              <Text style={{fontSize: 12}}>Account Number: 22737985845</Text>
              <Text style={{fontSize: 12}}>Account Name: Andrew Mwangi</Text>
              <Text style={{fontSize: 12}}>Card Number: 22737985845</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{flex: 2}}>
              <Image source={require('../assets/icons/cc1.png')}
                style={styles.image}
                />
            </View>
            <View style={{flex: 3}}>
              <Text style={{fontSize: 18, color: bongzBlue}}>Absa Bank</Text>
              <Text style={{fontSize: 12}}>Account Number: 22737985845</Text>
              <Text style={{fontSize: 12}}>Account Name: Andrew Mwangi</Text>
              <Text style={{fontSize: 12}}>Card Number: 22737985845</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{flex: 2}}>
              <Image source={require('../assets/icons/cc2.png')}
                style={styles.image}
                />
            </View>
            <View style={{flex: 3}}>
              <Text style={{fontSize: 18, color: bongzBlue}}>FNB Bank</Text>
              <Text style={{fontSize: 12}}>Account Number: 22737985845</Text>
              <Text style={{fontSize: 12}}>Account Name: Andrew Mwangi</Text>
              <Text style={{fontSize: 12}}>Card Number: 22737985845</Text>
            </View>
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
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  button: {
    borderRadius: 20,
    backgroundColor: bongzBlue,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  image: {
    height: 80,
    width: 120,
  },
  bongzCard: {
    flex: 3,
  },
});
