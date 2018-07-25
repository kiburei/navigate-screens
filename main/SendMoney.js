import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { bongzBlue } from './assets/colors';
import Recipients from "./assets/recipients.json";
import { Icon } from 'react-native-elements';


export default class SendMoney extends Component {
    static navigationOptions = {
    header: null
  }
  state = {
    recipient: '',
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.banner}>
            <Icon 
                type='font-awesome' 
                name='chevron-left' 
                color='#fff'
                containerStyle={{
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginLeft: 5,
                }}
                onPress={() => this.props.navigation.navigate('Main')}
            />
            <Text style={styles.bannerText}>Send Money</Text>
        </View>
        <KeyboardAvoidingView style={styles.form}>
            <Text style={styles.header}>Frequently used Agents</Text>
            <View style={{flexDirection: 'row', width: '100%', borderWidth: 2, borderColor: 'lightgray'}}>
                <Picker
                    selectedValue={this.state.recipient}
                    style={{ height: 50,  width: '90%', borderColor: 'lightgray'}}
                    onValueChange={(itemValue, itemIndex) => this.setState({recipient: itemValue})}>
                    <Picker.Item label="Kwa Zulu Natal" value="Kwa Zulu Natal" />
                    <Picker.Item label="Malema Stores" value="Malema Stores" />
                    <Picker.Item label="Xhobuku" value="Xhobuku" />
                </Picker>
                <Icon 
                    type='ionicon' 
                    name='ios-search' 
                    color='#fff' 
                    containerStyle={{
                        width: '10%', 
                        backgroundColor: 'grey', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}
                />
            </View>  
            <View style={{flexDirection: 'row', width: '100%'}}>
                <View style={{width: '45%'}}>
                    <Text style={styles.header}>Bongo ID</Text>
                    <View style={styles.textInputView}>
                        <TextInput
                            keyboardType='numeric'
                            underlineColorAndroid='transparent'
                        />
                    </View>
                </View>
                <View style={{width: '10%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'grey'}}>or</Text>
                </View>
                <View style={{width: '45%'}}>
                    <Text style={styles.header}>Scan QR</Text>
                    <TouchableOpacity style={styles.openQRButton} onPress={() => this.props.navigation.navigate('QrCode')}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Open Scanner</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.header}>Enter Amount</Text>
            <View style={styles.textInputView}>
                <TextInput
                    keyboardType='numeric'
                    underlineColorAndroid='transparent'
                />
            </View>  
            <TouchableOpacity style={styles.button}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Send Me My Code</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    padding: 15,
    backgroundColor: bongzBlue,
  },
  bannerText: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 25,
  },
  header: {
    fontSize: 20,
    color: bongzBlue,
  },
  button: {
    marginTop: 20,
    backgroundColor: bongzBlue,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 9,  
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center'
  },
  headerSmall: {
    color: bongzBlue,
  },
  textInputView: {
      borderWidth: 2, 
      borderColor: 'lightgray'
  },
  openQRButton: {
    backgroundColor: bongzBlue,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


{/* <View style={styles.form}>
            <Text style={styles.header}>Enter Recipient Mobile Number or Bongz ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </Text>
            <TextInput
              keyboardType="numeric"
            />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('QrCode')}
                style={styles.button}>
                <Text style={{color: 'white'}}>Open Scanner</Text>
              </TouchableOpacity>
          <Text style={styles.header}>Enter Amount</Text>
          <TextInput
            keyboardType="numeric"
            />
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Send</Text>
          </TouchableOpacity>
        </View> */}