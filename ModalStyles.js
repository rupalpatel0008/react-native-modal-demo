import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.5,
    backgroundColor: 'black',
  },
  innerContainer: {
    backgroundColor: 'blue',
    borderColor: 'blue',
    borderWidth: '1rem',
    borderRadius: '10rem',
    paddingVertical: 20,
    paddingHorizontal: 20,
    minWidth: width * 0.80,
    minHeight: 150,
  },
})