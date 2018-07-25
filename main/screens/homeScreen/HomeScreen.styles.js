import { StyleSheet } from 'react-native';
import { bongzBlue } from '../../assets/colors';

export default StyleSheet.create({
    banner: {
      flex: 2,
      backgroundColor: bongzBlue,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bannerText: {
      color: 'white',
      fontSize: 25,
    },
    bannerMoney: {
      color: 'white'
    },
    main: {
      flex: 9,
      padding: 10,
    },
    slider: {
      padding: 5,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      alignItems: 'center',
    },
    actionHeader: {
      fontSize: 12,
      color: bongzBlue,
    },
    actionText: {
      fontSize: 10,
    },
    actions: {
      padding: 5,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    },
    icons: {
      width: 40,
      height: 40,
    },
  });