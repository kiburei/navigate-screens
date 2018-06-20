import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { bongzBlue } from '../assets/colors';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

_alert = (value) => {
  Alert.alert(value);
}

const action = (value) => (
  <TouchableOpacity
    style={{padding: 5,
            borderWidth: 0.8,
            borderColor: bongzBlue,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
    onPress={ () => this._alert(value) }>
    <Text style={{color: bongzBlue, fontSize: 10}}>View Message</Text>
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

const FirstRoute = () => <View style={{flex:1}}>
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


const SecondRoute = () => <View style={{flex:1}}>
                          <View style={styles.main}>
                            <Text>Date: 12/12/2017 - 19/12/2017</Text>
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

const ThirdRoute = () => <View style={{flex:1}}>
                          <View style={styles.main}>
                            <Text>Date: 12/12/2017 - 11/01/2018</Text>
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


export default class StatementScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Today' },
      { key: 'second', title: 'This Week' },
      { key: 'third', title: 'This Month' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar 
                                style={{backgroundColor: '#fff'}} 
                                indicatorStyle={{backgroundColor: bongzBlue}}
                                labelStyle={{ color: this.props.focused ? bongzBlue : 'grey'}}  
                                {...props} 
                            />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });

  render() {
    return (
        <View style={{flex:1}}>
            <View style={styles.banner}>
                <Text style={styles.header}>Statements </Text>
            </View>
            <View style={styles.container}>
                <TabViewAnimated
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    banner: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: bongzBlue,
        padding: 10,
        paddingLeft: 15,
      },
      header: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 15,
        color: 'white',
      },
      container: {
        flex: 9,
        justifyContent: 'center',
        alignContent: 'center'
      },
      tab: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
      },
//   banner: {
//     flex: 1,
//     backgroundColor: bongzBlue,
//     padding: 15,
//   },
//   header: {
//     fontSize: 20,
//     paddingLeft: 15,
//     color: 'white',
//   },

  h1: {
    color: bongzBlue,
    fontSize: 20,
  },
//   tabs: {
//     flex: 2,
//     flexDirection: 'row',
//   },
  activeTab: {
    padding: 15,
    borderBottomWidth: 3,
    borderColor: bongzBlue,
  },
  main: {
    flex: 1,
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

});
