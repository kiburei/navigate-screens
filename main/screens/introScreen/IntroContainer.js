import React, { PureComponent, Component } from 'react';
import {
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import AppIntro from 'react-native-app-intro';
import { StackNavigator } from 'react-navigation';
import styles from './Intro.Styles';
import IntroScreen from './IntroScreen';

export default class IntroContainer extends Component {
    onSkipBtnHandle = (index) => {
        console.log(index);
        this.props.navigation.navigate('Main');
    }
    doneBtnHandle = () => {
        this.props.navigation.navigate('Main');
    }
    nextBtnHandle = (index) => {
        console.log(index);
    }
    onSlideChangeHandle = (index, total) => {
        console.log(index, total);
    }
    render() {
        console.log("this.props.navigation", this.props.navigation)
        return (
            <AppIntro showSkipButton={true} skipBtnLabel='Skip' nextBtnLabel='Next'
                onNextBtnClick={this.nextBtnHandle}
                onDoneBtnClick={this.doneBtnHandle}
                onSkipBtnClick={this.onSkipBtnHandle}
                onSlideChange={this.onSlideChangeHandle}
            >
                <View style={styles.slide}>
                    <Image source={require('../../assets/images/background-image.jpeg')} style={styles.backGroundImage} />
                    <View style={styles.overlay} />
                    <View style={styles.textView}>
                        <View level={15} >
                            <Text style={styles.titleText}>Welcome to your Bongz Wallet</Text>
                        </View>
                        <View level={20}>
                            <Text style={styles.text}>
                                Manage all your credit and debit cards in one place. No need to carry a bulky wallet everywhere with you
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../../assets/images/background-image.jpeg')} style={styles.backGroundImage} />
                    <View style={styles.overlay} />
                    <View style={styles.textView}>
                        <View level={15}>
                            <Text style={styles.titleText}>Your Bongz Card and Account</Text>
                        </View>
                        <View level={20}>
                            <Text style={styles.text}>
                                Send and receive money conviniently and instantly. Load money from agents or your bank account
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../../assets/images/background-image.jpeg')} style={styles.backGroundImage} />
                    <View style={styles.overlay} />
                    <View style={styles.textView}>
                        <View level={15}>
                            <Text style={styles.titleText}>Paying for Goods and Services</Text>
                        </View>
                        <View level={20}>
                            <Text style={styles.text}>
                                Paying for goods and services by scanning a QR code or entering a shop number. All with just your phone.
                            </Text>
                        </View>
                    </View>   
                </View>
                <View style={styles.slide}>
                    <Image source={require('../../assets/images/background-image.jpeg')} style={styles.backGroundImage} />
                    <View style={styles.overlay} />
                    <View style={styles.textView}>
                        <View level={15}>
                            <Text style={styles.titleText}>Track your expenses in one place</Text>
                        </View>
                        <View level={20}>
                            <Text style={styles.text}>
                                View a common statement for all your cards and accounts in one place. See what you spend in a day, month or year.
                            </Text>
                        </View>
                    </View>
                </View>
            </AppIntro>
        );
    }
};
