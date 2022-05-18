import React, { useState } from 'react'
import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const TutorialScreen = () => {

  const [modalVisible, setModalVisible] = useState(true)

  return (
    <View style={styles.centeredView}>
      <Modal style={styles.modalView}

      visible={modalVisible}
      animationType='slide'
      
      >
        <View style={styles.centeredView}>
        <TouchableOpacity style={styles.button}>

          <Text style={styles.textStyle}> X</Text>
        </TouchableOpacity>
        <Image source={require('../assets/BienvenidaApp.png')}>


        </Image>
        </View>
    
      </Modal>
      
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});


