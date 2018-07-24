import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert, Picker } from 'react-native';
import { bongzBlue } from './assets/colors';
import { Dropdown } from 'react-native-material-dropdown';
import { Icon } from 'react-native-elements';

export default class ShopNo extends Component {
   state = {
    store: ''
   } 
  static navigationOptions = {
    header: null
  }
  confirmPayment(){
    Alert.alert(
        '',
        `Thank you for your payment. Goods amount 999.99 at` +`\n`
        +`Shop No 99999`,
        [
            { text: 'Ok', onPress: () => this.props.navigation.navigate('Home') }
        ]
    )
    
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
      <View style={styles.main}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Pay using Shop No.</Text>
        </View>
        <ScrollView>
            <View style={styles.shopId}>
            <View style={{flex: 1}}>
                <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                style={styles.image} />
            </View>
            <View style={{flex: 2}}>
                <Text style={styles.header}>Taj Cape Town</Text>
                <Text style={styles.headerSmall}>Bonz ID: <Text style={styles.details}>985658456</Text></Text>
                <Text style={styles.headerSmall}>Location: <Text style={styles.details}>Cape Town, SA</Text></Text>
                <Text style={styles.headerSmall}>Contacts: <Text style={styles.details}>+27 21 578 2545</Text></Text>
            </View>
            </View>
            <KeyboardAvoidingView style={styles.form}>
            <Text style={styles.header}>Frequently Paid</Text>
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
            <Text style={styles.header}>Enter Shop Number</Text>
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
                <Text style={{color: 'white', fontWeight: 'bold'}}>Pay Now</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  banner: {
    padding: 15,
    backgroundColor: bongzBlue,
  },
  bannerText: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 25,
  },
  shopId: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  form: {
    flex: 3,  
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  image: {
    // borderStyle: 'solid',
    borderWidth: 3,
    borderColor: bongzBlue,
    borderRadius: 200,
    height: 100,
    width: 100,
  },
  header: {
    fontSize: 20,
    color: bongzBlue,
  },
  headerSmall: {
    color: bongzBlue,
  },
  details: {
    color: 'grey',
  },
  textInputView: {
    borderWidth: 2, 
    borderColor: 'lightgray'
  },
  button: {
    marginTop: 10,
    backgroundColor: bongzBlue,
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
