import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { bongzBlue } from '../assets/colors';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class StatementScreen extends Component {
  _alert = (value) => {
    Alert.alert(value);
  }

  render() {
    const action = (value) => (
      <TouchableOpacity
        style={styles.button}
        onPress={ () => this._alert(value) }>
        <Text style={{color: bongzBlue}}>View More</Text>
      </TouchableOpacity>
    );

    const tableHead = ['Confirmation Code', 'Card', 'Transaction', ''];

    const tableData = [
       ['QWESDF234', 'xxxx 2332', '+23, 000', action('QWESDF234 transaction confirmed')],
       ['QWESDF234', 'xxxx 2332', '-200', action('QWESDF234 transaction confirmed')],
       ['QWESDF234', 'xxxx 2332', '+23, 000', action('QWESDF234 transaction confirmed')],
       ['QWESDF234', 'xxxx 2332', '-200', action('QWESDF234 transaction confirmed')],
       ['QWESDF234', 'xxxx 2332', '+23, 000', action('QWESDF234 transaction confirmed')],
       ['QWESDF234', 'xxxx 2332', '-200', action('QWESDF234 transaction confirmed')],
      ];

    return (
      <View style={{flex:1}}>
        <View style={styles.banner}>
          <Text style={styles.header}>Statements</Text>
        </View>
        <View style={styles.tabs}>
          <View style={styles.activeTab}>
            <Text style={{color: bongzBlue, textAlign: 'center', fontSize: 18}}>Today</Text>
          </View>
          <View style={{flex: 1, padding: 15}}>
            <Text style={{textAlign: 'center', fontSize: 18}}>This Week</Text>
          </View>
          <View style={{flex: 1, padding: 15}}>
            <Text style={{textAlign: 'center', fontSize: 18}}>This Month</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Text>Date: 12/12/2017</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.h1}>Total Received</Text>
              <Text>100000</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.h1}>Total Paid Out</Text>
              <Text>100,000</Text>
            </View>
          </View>
        </View>
        <View style={styles.table}>
          <Table borderStyle={{borderWidth: 0}}>
            <Row data={tableHead} style={styles.head} textStyle={styles.textHeader}/>
            <Rows data={tableData} style={styles.row} textStyle={styles.text}/>
          </Table>
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
  h1: {
    color: bongzBlue,
    fontSize: 20,
  },
  tabs: {
    flex: 2,
    flexDirection: 'row',
  },
  activeTab: {
    padding: 15,
    borderBottomWidth: 3,
    borderColor: bongzBlue,
  },
  main: {
    flex: 2,
    padding: 10,
  },
  table: {
    flex: 15,
    padding: 10,
  },
  head: {
    height: 40,
  },
  textHeader: {
    color: bongzBlue,
    marginLeft: 5,
    fontSize: 10,
    textAlign: 'center',
  },
  text: {
    marginLeft: 5
  },
  row: {
    height: 50
  },
  button: {
    borderWidth: 0.8,
    borderColor: bongzBlue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
