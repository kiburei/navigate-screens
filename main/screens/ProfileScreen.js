import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { bongzBlue } from '../assets/colors';
import { Icon } from 'react-native-elements';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
const {height, width} = Dimensions.get('window');

const FirstRoute = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.heading}>Your QR Code</Text>
            <View style={{flex: 1, flexDirection: 'row', padding: 15, paddingBottom: 15}}>
                <View style={{flex: 2}}>
                    <Image source={require('../assets/icons/qr.png')}
                    style={{width: 100, height: 100}}
                    />
                </View>
                <View style={{flex: 3}}>
                    <Text>
                        let others scan this QR code to
                        receive payment from then. Share
                        to send your detials to others
                    </Text>
                    <TouchableOpacity style={styles.btn}>
                        <Icon 
                            type='material' 
                            name='share' 
                            color='#fff'
                            containerStyle={{
                                justifyContent: 'center', 
                                alignItems: 'center',
                                marginRight: 10
                            }}
                        />
                        <Text style={{color: 'white'}}>Expand</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.heading}>Bongz ID: 28545855145</Text>
            <Text style={{padding: 15}}>
            Your Bongz ID is your unique key. People can use it
            to send money to you. You can send either your ID or
            QR code to receive payment
            </Text>
        </View>
    )
}
const SecondRoute = () => {
    return (
        <View style={[styles.main], {padding: 15, justifyContent: 'center'}}>
            <View style={{flexDirection: 'row', paddingTop: 20}}>
                <Text style={{color: bongzBlue, fontSize: 25, fontWeight: 'bold'}}>Your Email Address</Text>
                <Icon 
                    type='material-community' 
                    name='pencil' 
                    color='grey'
                    containerStyle={{
                        justifyContent: 'center', 
                        alignItems: 'center',
                        marginLeft: '50%'
                    }}
                />
            </View>
            <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold'}}>brian.wamiori@gmail.com</Text>
            <View style={{flexDirection: 'row', paddingTop: 20}}>
                <Text style={{color: bongzBlue, fontSize: 25, fontWeight: 'bold'}}>Your Phone Number</Text>
                <Icon 
                    type='material-community' 
                    name='pencil' 
                    color='grey'
                    containerStyle={{
                        justifyContent: 'center', 
                        alignItems: 'center',
                        marginLeft: '50%'
                    }}
                />
            </View>
            <Text style={{color: 'grey', fontSize: 20, fontWeight: 'bold'}}>+27 723400442</Text>
        </View>
    )
}
export default class ProfileScreen extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Your Bongz Details' },
            { key: 'second', title: 'Personnal Details' },
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
            <View style={{ flex: 1}}>
                <View style={styles.banner}>
                    <Image source={require('../assets/icons/user.png')}
                    style={styles.bannerImage}
                    />
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>John Doe</Text>
                    <Text style={{textAlign: 'center', color: 'white'}}>john.doe@mail.com</Text>
                    <TouchableOpacity
                    style={styles.headerBtn}>
                    <Icon 
                        type='material' 
                        name='share' 
                        color={bongzBlue}
                        containerStyle={{
                            justifyContent: 'center', 
                            alignItems: 'center',
                            marginRight: 10
                        }}
                    />
                    <Text style={{color: bongzBlue}}>Share Your Details</Text>
                    </TouchableOpacity>
                </View>
                <TabViewAnimated
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                />
            </View>
            
                
        );
    }
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    backgroundColor: bongzBlue,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 4,
  },
  headerBtn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    width: width/2
  },
  heading: {
    fontSize: 20,
    color: bongzBlue,
    paddingLeft: 15,
  },
  btn: {
    flexDirection: 'row',  
    backgroundColor: bongzBlue,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  bannerImage: {
    // borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 200,
    height: 100,
    width: 100,
  }
});
