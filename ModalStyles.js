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
  modalContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: '50rem',
    paddingHorizontal: '50rem',
    justifyContent: 'center',
    height: height,
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
