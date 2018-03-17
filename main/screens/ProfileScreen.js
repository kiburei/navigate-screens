import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { bongzBlue } from '../assets/colors';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={styles.banner}>
          <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
            />
          <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>John Doe</Text>
         <Text style={{textAlign: 'center', color: 'white'}}>john.doe@mail.com</Text>
         <TouchableOpacity
           style={styles.headerBtn}>
           <Text style={{color: bongzBlue}}>Share Your Details</Text>
         </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <TouchableOpacity style={{padding: 10, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 3, borderColor: bongzBlue}}>
                  <Text style={{color: bongzBlue}}>Your Bongz Details</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity style={{padding: 10, alignItems: 'center', justifyContent: 'center'}}>
                  <Text>Personnal Details</Text>
                </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.heading}>Your QR Code</Text>
          <View style={{flex: 1, flexDirection: 'row', padding: 15, paddingBottom: 15}}>
            <View style={{flex: 2}}>
              <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                />
            </View>
            <View style={{flex: 3}}>
              <Text>
                let others scan this QR code to
                receive payment from then. Share
                to send your detials to others
              </Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={{color: 'white'}}>Expand</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.heading}>Bongz ID: 28545855145</Text>
          <Text style={{padding: 15}}>
            Your Bongz ID is your unique key. People can use it
            to send money to you. You can send either your ID or
            QR code to receive payment
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    flex: 2,
    backgroundColor: bongzBlue,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 4,
  },
  headerBtn: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  heading: {
    fontSize: 20,
    color: bongzBlue,
    paddingLeft: 15,
  },
  btn: {
    backgroundColor: bongzBlue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
