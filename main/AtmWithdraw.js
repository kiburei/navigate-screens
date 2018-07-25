import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { bongzBlue } from './assets/colors';
import { Icon } from 'react-native-elements';

export default class AtmWithdraw extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    atm: '',
  }
  render() {
    let data = [{
      value: 'Standard Bank',
    }, {
      value: 'Absa',
    }, {
      value: 'FNB',
    }, {
      value: 'Nedbank',
    }, {
      value: 'Capitec Bank',
    }
  ];
    return (
      <View style={{flex: 1}}>
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
          <Text style={styles.bannerText}>Withdraw From ATM</Text>
        </View>
        <Text style={{padding: 20, textAlign: 'center', fontWeight: 'bold', color: 'grey'}}>
          Request for a code to withdraw
          your money from an ATM.
          input the code in the ATM
          and withdraw
        </Text>
        <KeyboardAvoidingView style={styles.form}>
            <Text style={styles.header}>Frequently Used ATMs</Text>
            <View style={{flexDirection: 'row', width: '100%', borderWidth: 2, borderColor: 'lightgray'}}>
                <Picker
                    selectedValue={this.state.atm}
                    style={{ height: 50,  width: '90%', borderColor: 'lightgray'}}
                    onValueChange={(itemValue, itemIndex) => this.setState({stoatmre: itemValue})}>
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
            <Text style={styles.header}>ATM Number</Text>
            <View style={styles.textInputView}>
                <TextInput
                    keyboardType='numeric'
                    underlineColorAndroid='transparent'
                />
            </View>
            <Text style={styles.header}>Enter Amount</Text>
            <View style={styles.textInputView}>
                <TextInput
                    keyboardType='numeric'
                    underlineColorAndroid='transparent'
                />
            </View>  
            <TouchableOpacity style={styles.button} >
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
});
