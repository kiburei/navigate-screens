import React, {Component, PureComponent} from 'react';
import { View, Modal, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { bongzBlue } from '../../assets/colors';
import { CheckBox, Icon } from 'react-native-elements';

const {height, width} = Dimensions.get('window');
import styles from './CardScreen.Styles';

export default class CardModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };  
    }
    render () {
        return (
            <ScrollView keyboardShouldPersistTaps='always'>
                <View style={styles.modalView}>
                    <Icon
                        raised
                        name='close'
                        type='font-awesome'
                        color='#fff'
                        containerStyle={styles.closeModal}
                        onPress={this.props.closeModal} />
                    <View style={styles.columnView}>
                        <TextInput 
                            placeholder='Email' 
                            underlineColorAndroid='transparent' 
                            keyboardType='email-address' 
                            style={styles.textInput}/>
                    </View>
                    <View style={styles.columnView1}>
                        <TextInput 
                            placeholder='Card Number' 
                            underlineColorAndroid='transparent' 
                            keyboardType='numeric' 
                            style={styles.textInput}/>
                    </View>
                    <View style={styles.columnView2}>
                        <TextInput 
                            placeholder='MM/YY' 
                            underlineColorAndroid='transparent'
                            style={styles.textInput1}/>
                        <TextInput 
                            placeholder='CVC' 
                            underlineColorAndroid='transparent' 
                            keyboardType='numeric' 
                            style={styles.textInput1}/>
                    </View>
                    <CheckBox
                        title='Remember Me'
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})}
                        containerStyle={styles.checkBox}
                    />
                    <TouchableOpacity style={styles.cardSaveButton}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
};
 