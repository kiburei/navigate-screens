import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { bongzBlue } from './assets/colors';
import { Icon } from 'react-native-elements';
import AgentWithdraw from './AgentWithdraw';
const { height, width } = Dimensions.get('window');

export default class ReceiveMoney extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.banner}>
            <Text style={styles.bannerText}>Receive Payment</Text>
        </View>
        <View style={styles.profileBanner}>
            <Image source={require('../main/assets/images/background-image.jpeg')} style={styles.backGroundImage} />
            <View style={styles.overlay} />
          <View style={{flex: 1}}>
            <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
             style={styles.bannerImage} />
          </View>
          <View style={{flex: 3}}>
            <Text style={styles.bannerText}>Engineer Mwangi</Text>
            <Text style={{color: 'white', paddingLeft: 15}}>akiburei@gmail.com</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.header}>Your QR Code</Text>
            <View style={styles.qrCode}>
              <View style={{flex: 1}}>
                <Image source={require('./assets/icons/qr.png')}
                  style={styles.image}
                  />
              </View>
              <View style={{flex: 2}}>
                <Text style={{paddingTop: 10}}>
                  let others scan this QR code to
                  receive payment from then. Share
                  to send your detials to others
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Icon 
                        type='material' 
                        name='share' 
                        color='#fff' 
                        containerStyle={{
                            padding: 20,
                        }}
                    />
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Expand</Text>
                </TouchableOpacity>

              </View>
            </View>
            <View style={{flex: 2, padding: 10}}>
              <Text style={styles.header}>Bongz ID: 284585465</Text>
              <Text style={{paddingLeft: 20}}>
                Your Bongz ID is your unique key. People can use it
                to send money to you. You can send either your ID or
                QR code to receive payment
              </Text>
                <TouchableOpacity style={styles.buttonBig}>
                    <Icon 
                            type='materiel' 
                            name='share' 
                            color='#fff' 
                            containerStyle={{
                                width: '30%',
                                padding: 15
                            }}
                        />
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Share Your Details</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 8,
  },
  banner: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    backgroundColor: bongzBlue,
  },
  bannerText: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 25,
  },
  qrCode: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
  bannerImage: {
    // borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 200,
    height: 70,
    width: 70,
  },
  header: {
    paddingTop: 30,
    paddingLeft: 20,
    fontSize: 20,
    color: bongzBlue,
  },
  headerSmall: {
    color: bongzBlue,
  },
  details: {
    color: 'grey',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: bongzBlue,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: width/3
  },
  buttonBig: {
    flexDirection: 'row',
    backgroundColor: bongzBlue,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: width/2,
    marginRight: width/4,
    marginLeft: width/4,
    marginTop: 15,
    padding: 10
  },
  profileBanner: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    overflow: 'hidden'
  },
  backGroundImage: {
    ...StyleSheet.absoluteFillObject,
    height: 115,
    width: width
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(62,195,211,0.5)'
  }
});
