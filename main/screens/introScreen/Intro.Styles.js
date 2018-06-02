import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  slide: {
    flex: 1,
    padding: 15,
  },
  textView: {
    flex:1,  
    justifyContent: 'center', 
    alignItems: 'baseline', 
    marginTop: height/3
  },
  titleText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15
  },
  text: {
    color: '#fff',
    padding: 15,
  },
  backGroundImage: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(62,195,211,0.5)'
  }
});