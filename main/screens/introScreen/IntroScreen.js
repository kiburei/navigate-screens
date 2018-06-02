import React, { PureComponent, Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import styles from './Intro.Styles';
 
export default class IntroSCreen extends PureComponent {
    render () {
        return (
            <View style={styles.slide}>
                <Image source={require('../../assets/images/background-image.jpeg')} style={styles.backGroundImage} />
                <View style={styles.overlay} />
                <View style={styles.textView}>
                    <View level={15} >
                        <Text style={styles.titleText}>{this.props.title}</Text>
                    </View>
                    <View level={20}>
                        <Text style={styles.text}>
                            {this.props.description}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
};
