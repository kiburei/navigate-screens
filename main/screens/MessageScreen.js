import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { bongzBlue } from '../assets/colors';

export default class MessageScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.banner}>
          <Text style={styles.header}>Messages</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, borderBottomWidth: 2, borderColor: bongzBlue,}}>
            <TouchableOpacity style={styles.tab}>
              <Text style={{color: bongzBlue, fontSize: 18,}}>Confirmation</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity style={styles.tab}>
              <Text style={{fontSize: 18}}>Support</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.message}>
            <Text style={styles.messageText}>Vivamus suscipit tortor eget felis
              porttitor volutpat. Cras ultricies ligula
              sed magna dictum porta. Cras ultricies
              ligula sed magna dictum porta.</Text>
          </View>
          <View style={styles.message}>
            <Text style={styles.messageText}>Vivamus suscipit tortor eget felis
              porttitor volutpat. Cras ultricies ligula
              sed magna dictum porta. Cras ultricies
              ligula sed magna dictum porta.</Text>
          </View>
          <View style={styles.message}>
            <Text style={styles.messageText}>Vivamus suscipit tortor eget felis
              porttitor volutpat. Cras ultricies ligula
              sed magna dictum porta. Cras ultricies
              ligula sed magna dictum porta.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: bongzBlue,
    padding: 10,
    paddingLeft: 15,
  },
  header: {
    color: 'white',
    fontSize: 25.
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  main: {
    flex: 9,
    padding: 15,
  },
  message: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 5,
  },
  messageText: {
    padding: 20,
    fontSize: 16,
  },
});
