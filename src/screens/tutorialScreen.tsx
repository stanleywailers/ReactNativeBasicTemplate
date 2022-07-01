import React, {useState} from 'react';
import {Button, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export const TutorialScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const onPress = () => {
   
    setModalVisible(false)
  };
  return (
    <View>
      <Modal
        style={styles.modalView}
        visible={modalVisible}
        animationType="slide">
        
          <View style={styles.centeredView}>
            <View style={styles.button}>
              <TouchableOpacity
              onPress={onPress}
              >
                <Text style={styles.textStyle}> X</Text>
              </TouchableOpacity>
            </View>
            <Image source={require('../assets/BienvenidaApp.png')}></Image>
          </View>
        
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: 'transparent',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'yellow',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    overflow:'hidden',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    elevation: 2,
    width:40,
    height:40,
    top: 45,
    left: 125,
    zIndex: 100,
  },

  textStyle: {
    color: '#00559C',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
