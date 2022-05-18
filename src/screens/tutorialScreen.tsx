import React, { useState, useRef } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Dimensions , Text, View, TouchableOpacity} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgProps } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';

import ConfiaIcon1 from '../assets/tutoConfia1.svg';
import ConfiaIcon2 from '../assets/tutoConfia2.svg';
import ConfiaIcon3 from '../assets/tutoConfia3.svg';

const { width: screenWidth } = Dimensions.get('window');

export interface TutorialCard {
    title: string,
    img: React.FC<SvgProps>
}

const items: TutorialCard[] = [
    {
      title: 'Lleva tu carné Confia a todos lados',
      img: ConfiaIcon1
    },
    {
      title: 'Realiza tramites de forma rápida',
      img: ConfiaIcon2
    },
    {
      title: 'Consulta descuentos en diversos establecimientos',
      img: ConfiaIcon3
    }
]

interface Props extends StackScreenProps<any, any>{};

export const TutorialScreen = () => {

  const carouselRef = useRef<Carousel<TutorialCard>>(null);

  const [ dotActiveIndex, setDotActiveIndex ] = useState(0);

  const renderItem = (item: TutorialCard) => {
      return (
        <View 
            style={{
                flex: 3,
                flexDirection: 'row',
                alignItems: 'center',
                //backgroundColor: '#F00'                
            }}
        >
          <TouchableOpacity 
             style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#DCE4F2',
                marginLeft: 20,
                marginBottom: 200,
             }}
             activeOpacity={0.7}
             onPress={() => { carouselRef.current?.snapToPrev(); }}
          >
            <Icon name='arrow-back-sharp' size={20} color='#00559c'/>
          </TouchableOpacity>
          <View
            style={{
                flex: 1,
                margin: 0,
                padding: 0,                
                backgroundColor: '#FFF',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
          {/* renderixando svg */}
          <item.img 
            width={100}
            height={100}
            
          />

          <Text 
              style={{
                  fontSize: 23,
                  color: '#00559c',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 10,
                  marginBottom: 100
              }}
          >
            { item.title }
          </Text>
          
            <Pagination 
                dotsLength={ items.length }
                activeDotIndex={ dotActiveIndex }
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: '#1D64D5'

                }}
                inactiveDotScale={1}
               
               
            />

        </View>
        <TouchableOpacity
             style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#DCE4F2',
                marginRight: 20,
                marginBottom: 200
             }}
             activeOpacity={0.7}
             onPress={() => { carouselRef.current?.snapToNext(); }}
          >
            <Icon name='arrow-forward-sharp' size={20} color='#00559c'/>
          </TouchableOpacity>
        </View>
        
      )
  }

    return (
      <SafeAreaView
        style={{
            flex: 1,
            alignItems: 'center',
        }}
      >
          <Carousel
            ref={carouselRef}
            data={items}
            renderItem={({ item }) => renderItem(item)}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            layout='default'
            onSnapToItem={(index) => {
              setDotActiveIndex(index);
            }}

          />

        <TouchableOpacity
            style={{
                width: 300,
                height: 50,
                backgroundColor: '#00559c',
                borderRadius: 23,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
          <Text
              style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#FFF'
              }}
          >
            Comenzar
          </Text>
        </TouchableOpacity>
    
      </SafeAreaView>
    )
}

// import React, { useState } from 'react'
// import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

// export const TutorialScreen = () => {

//   const [modalVisible, setModalVisible] = useState(true)

//   return (
//     <View style={styles.centeredView}>
//       <Modal style={styles.modalView}

//       visible={modalVisible}
//       animationType='slide'
      
//       >
//         <View style={styles.centeredView}>
//         <TouchableOpacity style={styles.button}>

//           <Text style={styles.textStyle}> X</Text>
//         </TouchableOpacity>
//         <Image source={require('../assets/BienvenidaApp.png')}>


//         </Image>
//         </View>
    
//       </Modal>
      
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 10,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 20,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
  
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   }
// });


