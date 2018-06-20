import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { bongzBlue } from '../assets/colors';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => <View style={styles.main}>
                            <View style={styles.messageView}>
                                <View style={styles.messageLabel}>
                                    <Text style={styles.messageLabelText}>B</Text>
                                </View>
                                <View style={styles.message}>
                                <Text style={styles.messageText}>Vivamus suscipit tortor eget felis
                                    porttitor volutpat. Cras ultricies ligula
                                    sed magna dictum porta. Cras ultricies
                                    ligula sed magna dictum porta.</Text>
                                </View>
                            </View>
                            <View style={styles.messageView}>
                                <View style={styles.messageLabel}>
                                    <Text style={styles.messageLabelText}>B</Text>
                                </View>    
                                <View style={styles.message}>
                                <Text style={styles.messageText}>Vivamus suscipit tortor eget felis
                                    porttitor volutpat. Cras ultricies ligula
                                    sed magna dictum porta. Cras ultricies
                                    ligula sed magna dictum porta.</Text>
                                </View>
                            </View>  
                            <View style={styles.messageView}>
                                <View style={styles.messageLabel}>
                                    <Text style={styles.messageLabelText}>B</Text>
                                </View>   
                                <View style={styles.message}>
                                <Text style={styles.messageText}>Vivamus suscipit tortor eget felis
                                    porttitor volutpat. Cras ultricies ligula
                                    sed magna dictum porta. Cras ultricies
                                    ligula sed magna dictum porta.</Text>
                                </View>
                            </View>    
                          </View>;

const SecondRoute = () => <View style={styles.main}>
                            <View style={{flex: 9}}>
                             <View style={styles.messageView}>
                                <View style={styles.messageLabel}>
                                    <Text style={styles.messageLabelText}>B</Text>
                                </View>
                                <View style={styles.message}>
                                    <Text style={styles.messageText}>How may we help you Brian?</Text>
                                </View>
                              </View>
                              <View style={styles.messageView}>
                                <View style={styles.messageLabelImage}>
                                    <Image source={require('../assets/icons/user.png')}
                                        style={styles.image}
                                    />
                                </View>
                                <View style={styles.message}>
                                    <Text style={styles.messageText}>My emails are not going through.
                                    Please help.</Text>
                                </View>
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

  _renderHeader = props => <TabBar 
                                style={{backgroundColor: 'white'}} 
                                indicatorStyle={{backgroundColor: bongzBlue}} 
                                labelStyle={{ color: this.props.focused ? bongzBlue : 'grey'}}
                                {...props} 
                            />

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

render() {
    return (
        <View style={{flex:1}}>
            <View style={styles.banner}>
                <Text style={styles.header}>Messages </Text>
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
  main: {
    flex: 1,
    padding: 15,
  },
  messageView: {
    marginLeft: 20,
    marginRight: 15,
    marginTop: 50,
  },
  image: {
      width: 40,
      height: 40,
  },
  message: {
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  messageText: {
    padding: 20,
    fontSize: 16,
  },
  messageLabel: {
      backgroundColor: bongzBlue,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      height: 50,
      marginRight: -10,
      marginBottom: -20,
      
  },
   messageLabelImage: {
      backgroundColor: bongzBlue,
      borderRadius: 50,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      width: 60,
      height: 60,
      marginLeft: '90%',
      marginBottom: -20,
  },
  messageLabelText: {
      color: '#fff',
      fontWeight: 'bold'
  }
});
