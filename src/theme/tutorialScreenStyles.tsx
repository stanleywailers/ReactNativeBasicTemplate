import {StyleSheet} from 'react-native';

export const tutorialScreenStyles = StyleSheet.create({
  standardButton: {
    width: 300,
    height: 50,
    backgroundColor: '#00559c',
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStandardButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  prevNavTutorialButton: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCE4F2',
    marginLeft: 20,
    top: 50,
  },
  nextNavTutorialButton: {
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCE4F2',
    marginRight: 20,
    top: 50,
  },
});
