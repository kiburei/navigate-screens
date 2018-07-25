import { StyleSheet, Dimensions } from 'react-native';
import { bongzBlue } from '../../assets/colors';
const { height, width } = Dimensions.get('window');

const textInputWidth = ((width-50)/2);
const textWidth = (width-50);

export default StyleSheet.create({
    banner: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: bongzBlue,
      padding: 15,
    },
    header: {
      flex: 3, 
      fontSize: 25,
      fontWeight: 'bold',
      paddingLeft: 15,
      color: 'white',
    },
    active: {
      flex: 1,
    },
    main: {
      flex: 15,
      padding: 10,
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
    },
    modalView:  {
        flex:0.5,
        justifyContent: 'space-around', 
        alignItems: 'center', 
        padding: 20
    },
    closeModal: {
        flex: 1, 
        alignSelf: 'flex-end', 
        backgroundColor: 'lightgray'
    },
    columnView: {
        flex:1, 
        borderRadius: 5,
        borderWidth: 1, 
        borderColor: 'lightgray', 
        marginBottom: 20, 
        padding: 1 
    },
    columnView1: {
        flex:1,
        borderRadius: 5,
        borderWidth: 1, 
        borderColor: 'lightgray', 
        marginBottom: -1, 
        padding: 1 
    },
    columnView2: {
        flex:1,
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 1, 
        borderColor: 'lightgray', 
        marginBottom: 20, 
        padding: 1
    },
    textInput: {
        width: textWidth
    },
    textInput1: {
        width: textInputWidth
    },
    checkBox: {
        flex:1, 
        width: textWidth,
        borderWidth: 1, 
        borderColor: 'lightgray', 
        marginBottom: 20, 
        padding: 20
    },
    cardSaveButton: {
        flex:1 , 
        padding: 20,
        width: textWidth, 
        backgroundColor: bongzBlue, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 5
    },
    saveText: {
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold'
    },
  });