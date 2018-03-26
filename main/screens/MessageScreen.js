import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { bongzBlue } from '../assets/colors';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => <View style={styles.main}>
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
                          </View>;

const SecondRoute = () => <View style={styles.main}>
                            <View style={{flex: 9}}>
                              <View style={styles.message}>
                                <Text style={styles.messageText}>How may we help you Brian?</Text>
                              </View>
                              <View style={styles.message}>
                                <Text style={styles.messageText}>My emails are not going through.
                                  Please help.</Text>
                              </View>
                            </View>
                            <View style={{flex: 1}}>
                              <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style={{flex: 12}}>
                                  <TextInput
                                    placeholder="Type your Message" />
                                </View>
                                <View style={{flex: 2}}>
                                  <TouchableOpacity
                                    style={{backgroundColor: bongzBlue}}>
                                    <Image source={require('../assets/icons/sms.png')}
                                      style={{width: 45, height: 45}} />
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                          </View>;

export default class MessageScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Confrimations' },
      { key: 'second', title: 'Support' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar style={{backgroundColor: bongzBlue}} {...props} />;

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        />
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
    flex: 1,
    padding: 15,
  },
  message: {
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
  messageText: {
    padding: 20,
    fontSize: 16,
  },
});
