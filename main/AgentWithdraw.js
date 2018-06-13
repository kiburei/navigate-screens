import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { bongzBlue } from './assets/colors';
import { Icon } from 'react-native-elements';

export default class AgentWithdraw extends Component {
  state = {
      store: '',
  }
  static navigationOptions = {
    header: null
  }
  render() {
    let data = [{
      value: 'Kwa Zulu Natal',
    }, {
      value: 'Malema Stores',
    }, {
      value: 'Xhobuku',
    }
  ];
    return (
        <View style={{flex: 1}}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Withdraw From Agent</Text>
        </View>
        <KeyboardAvoidingView style={styles.form}>
        <Text style={styles.header}>Frequently used Agents</Text>
        <View style={{flexDirection: 'row', width: '100%', borderWidth: 2, borderColor: 'lightgray'}}>
            <Picker
                selectedValue={this.state.language}
                style={{ height: 50,  width: '90%', borderColor: 'lightgray'}}
                onValueChange={(itemValue, itemIndex) => this.setState({store: itemValue})}>
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
        <Text style={styles.header}>Enter Agent Number</Text>
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
        <TouchableOpacity style={styles.button} onPress={() => this.confirmPayment()}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Withdraw</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
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


{/* <View>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Withdraw From Agent</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.header}>Frequently Used Agents</Text>
            <Dropdown
              data={data}
              />
            <Text style={styles.header}>Enter Agent Number</Text>
            <TextInput
              keyboardType="numeric"
              />
          <Text style={styles.header}>Enter Amount</Text>
          <TextInput
            keyboardType="numeric"
            />
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View> */}