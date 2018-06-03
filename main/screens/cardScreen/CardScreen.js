import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image,
    Modal, 
    TouchableHighlight, 
    TextInput, 
    Dimensions, 
    Keyboard, 
    ScrollView 
} from 'react-native';
import { bongzBlue } from '../../assets/colors';
import styles from './CardScreen.Styles';
import { CheckBox, Icon } from 'react-native-elements';
import CardModal from './CardModal'
const {height, width} = Dimensions.get('window');

height = height - 20;
export default class CardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };  
    }
    closeModal () {
        console.log("closed close");
        this.setState({modalVisible: false });
    }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.banner}>
          <Text style={styles.header}>
            My Cards
          </Text>
          <TouchableOpacity style={styles.add} onPress={()=> this.setState({modalVisible: !this.state.modalVisible})}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.active}>

          <Text style={{textAlign: 'center', color: bongzBlue}}>Active Card</Text>
          <Text style={{fontSize: 6, textAlign: 'center'}}>Drag to Change</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.wallet}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 2}}>
                <Image source={require('../../assets/icons/bong_card.png')}
                  style={styles.image}
                  />
              </View>
              <View style={styles.bongzCard}>
                <Text>Bongz Wallet</Text>
                <Text>Your Bongz ID: 22455457</Text>
                <Text>Account Balance: R. 20,000</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={{color: 'white', fontSize: 12}}>Send Money</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex: 1}}>
                    <TouchableOpacity
                      style={styles.button}>
                      <Text style={{color: 'white', fontSize: 12}}>More Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <View style={{flex: 2}}>
              <Image source={require('../../assets/icons/cc.png')}
                style={styles.image}
                />
            </View>
            <View style={{flex: 3}}>
              <Text style={{fontSize: 18, color: bongzBlue}}>Standard Bank</Text>
              <Text style={{fontSize: 12}}>Account Number: 22737985845</Text>
              <Text style={{fontSize: 12}}>Account Name: Andrew Mwangi</Text>
              <Text style={{fontSize: 12}}>Card Number: 22737985845</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{flex: 2}}>
              <Image source={require('../../assets/icons/cc1.png')}
                style={styles.image}
                />
            </View>
            <View style={{flex: 3}}>
              <Text style={{fontSize: 18, color: bongzBlue}}>Absa Bank</Text>
              <Text style={{fontSize: 12}}>Account Number: 22737985845</Text>
              <Text style={{fontSize: 12}}>Account Name: Andrew Mwangi</Text>
              <Text style={{fontSize: 12}}>Card Number: 22737985845</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={{flex: 2}}>
              <Image source={require('../../assets/icons/cc2.png')}
                style={styles.image}
                />
            </View>
            <View style={{flex: 3}}>
              <Text style={{fontSize: 18, color: bongzBlue}}>FNB Bank</Text>
              <Text style={{fontSize: 12}}>Account Number: 22737985845</Text>
              <Text style={{fontSize: 12}}>Account Name: Andrew Mwangi</Text>
              <Text style={{fontSize: 12}}>Card Number: 22737985845</Text>
            </View>
          </View>

        </View>
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => this.setState({modalVisible: !this.state.modalVisible})}>
                <CardModal closeModal={this.closeModal.bind(this)}/>
        </Modal>
      </View>
    );
  }
}
