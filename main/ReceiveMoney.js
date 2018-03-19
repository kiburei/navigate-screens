import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { bongzBlue } from './assets/colors';

export default class ReceiveMoney extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.banner}>
          <View style={{flex: 1}}>
            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
             style={styles.bannerImage} />
          </View>
          <View style={{flex: 3}}>
            <Text style={styles.bannerText}>Engineer Mwangi</Text>
            <Text style={{color: 'white', paddingLeft: 15}}>akiburei@gmail.com</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.header}>Your QR Code</Text>
            <View style={styles.qrCode}>
              <View style={{flex: 1}}>
                <Image source={require('./assets/icons/qr.png')}
                  style={styles.image}
                  />
              </View>
              <View style={{flex: 2}}>
                <Text style={{paddingTop: 10}}>
                  let others scan this QR code to
                  receive payment from then. Share
                  to send your detials to others
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={{color: 'white'}}>Expand</Text>
                </TouchableOpacity>

              </View>
            </View>
            <View style={{flex: 2}}>
              <Text style={styles.header}>Bongz ID: 284585465</Text>
              <Text style={{paddingLeft: 20}}>
                Your Bongz ID is your unique key. People can use it
                to send money to you. You can send either your ID or
                QR code to receive payment
              </Text>
                <TouchableOpacity style={styles.buttonBig}>
                  <Text style={{color: 'white'}}>Share Your Details</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 8,
  },
  banner: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    backgroundColor: bongzBlue,
  },
  bannerText: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 25,
  },
  qrCode: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
  bannerImage: {
    // borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 200,
    height: 70,
    width: 70,
  },
  header: {
    paddingTop: 30,
    paddingLeft: 20,
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
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBig: {
    paddingLeft: 20,
    backgroundColor: bongzBlue,
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
