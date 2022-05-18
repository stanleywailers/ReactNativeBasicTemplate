import React, { useEffect, useRef } from 'react'
import { Animated, View } from 'react-native'
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';



export const SplashScreen = () => {
    const navigation = useNavigation();

    const progress = useRef(new Animated.Value(0)).current;

    const handleLikeAnimation = () => {
      Animated.timing(progress, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    };
    
    useEffect(() => {
      handleLikeAnimation();
    }, []);

  return (

       <View style={{  flex:1, backgroundColor:'#00559C'}}>
      <LottieView
      progress={progress}
        source={require('../splash-confia-prueba.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate('TutorialScreen')}
        
      />
       </View>
       

  )
}
