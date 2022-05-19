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

        <View style={styles.insideContainter}> 
        <View >
     
        <Image source={require('../assets/BienvenidaApp.png')}>


        </Image>
        
        </View>

<View style={styles.button}>
<TouchableOpacity >

      <Text style={styles.textStyle}> X</Text>
        </TouchableOpacity>
</View>
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
  },insideContainter:{
  
  
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:'pink'
   
  },
  modalView: {
   
    margin: 10,
    backgroundColor: "green",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
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

    position:'absolute',

     top: 95,

        right: 55,
        
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor:'red'
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});


