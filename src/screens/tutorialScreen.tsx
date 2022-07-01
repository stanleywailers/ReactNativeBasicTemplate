
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Ionicons';

import ConfiaIcon1 from '../assets/tutoConfia1.svg';
import ConfiaIcon2 from '../assets/tutoConfia2.svg';
import ConfiaIcon3 from '../assets/tutoConfia3.svg';
import CloseButton from '../assets/close-circle-outline.svg';
import {tutorialScreenStyles} from '../theme/tutorialScreenStyles';

const {width: screenWidth} = Dimensions.get('window');

export interface TutorialCard {
  PrevNavButton: boolean;
  title: string;
  img: React.FC<SvgProps>;
  nextNavButton: boolean;
  beginButton: boolean;
}

const items: TutorialCard[] = [
  {
    PrevNavButton: false,
    title: 'Lleva tu carné Confia a todos lados',
    img: ConfiaIcon1,
    nextNavButton: true,
    beginButton: false,
  },
  {
    PrevNavButton: true,
    title: 'Realiza tramites de forma rápida',
    img: ConfiaIcon2,
    nextNavButton: true,
    beginButton: false,
  },
  {
    PrevNavButton: true,
    title: 'Consulta descuentos en diversos establecimientos',
    img: ConfiaIcon3,
    nextNavButton: false,
    beginButton: true,
  },
];

export const TutorialScreen = () => {
const carouselRef = useRef<Carousel<TutorialCard>>(null);

  const [dotActiveIndex, setDotActiveIndex] = useState(0);

  const [modalVisible, setModalVisible] = useState(true);

  const onPress = () => {
   
    setModalVisible(false)
  };

  const renderItem = (item: TutorialCard) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          {item.PrevNavButton ? (
            <TouchableOpacity
              style={tutorialScreenStyles.prevNavTutorialButton}
              activeOpacity={0.7}
              onPress={() => {
                carouselRef.current?.snapToPrev();
              }}>
              <Icon name="arrow-back-sharp" size={20} color="#00559c" />
            </TouchableOpacity>
          ) : (
            <View
              style={{
                ...tutorialScreenStyles.prevNavTutorialButton,
                backgroundColor: '#FFF',
              }}></View>
          )}

          <View
            style={{
              flex: 1,
              margin: 0,
              padding: 0,
              backgroundColor: '#FFF',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* renderixando svg */}
            <item.img width={100} height={100} />

            <Text
              style={{
                fontSize: 23,
                color: '#00559c',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 100,
              }}>
              {item.title}
            </Text>

            <Pagination
              dotsLength={items.length}
              activeDotIndex={dotActiveIndex}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: '#1D64D5',
              }}
              inactiveDotScale={1}
            />
          </View>
          {item.nextNavButton ? (
            <TouchableOpacity
              style={tutorialScreenStyles.nextNavTutorialButton}
              activeOpacity={0.7}
              onPress={() => {
                carouselRef.current?.snapToNext();
              }}>
              <Icon name="arrow-forward-sharp" size={20} color="#00559c" />
            </TouchableOpacity>
          ) : (
            <View
              style={{
                ...tutorialScreenStyles.nextNavTutorialButton,
                backgroundColor: '#FFF',
              }}></View>
          )}
        </View>
        {item.beginButton && (
          <View style={{flexDirection: 'column'}}>
            <TouchableOpacity style={tutorialScreenStyles.standardButton}>
              <Text style={tutorialScreenStyles.textStandardButton}>
                Comenzar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View>
        <Carousel
          ref={carouselRef}
          data={items}
          renderItem={({item}) => renderItem(item)}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          layout="tinder"
          onSnapToItem={index => {
            setDotActiveIndex(index);
          }}
        />
      </View>

      {/* /*VIEW del modal*/}

      {modalVisible && (
        <View style={styles.centeredView}>
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
      )}
    </SafeAreaView>

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
