import { StyleSheet } from 'react-native';
import { bongzBlue } from '../../assets/colors';

export default StyleSheet.create({
    banner: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: bongzBlue,
      padding: 15,
    },
    header: {
      flex: 3, 
      fontSize: 20,
      paddingLeft: 15,
      color: 'white',
    },
    active: {
      flex: 1,
    },
    main: {
      flex: 15,
    },
    wallet: {
      flex: 1,
      alignItems: 'center',
      padding: 15,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    },
    card: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 15,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    },
    button: {
      borderRadius: 20,
      backgroundColor: bongzBlue,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
    },
    image: {
      height: 80,
      width: 120,
    },
    bongzCard: {
      flex: 3,
    },
    add: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    addText: {
        color: '#fff', 
        fontSize: 30
    }
  });