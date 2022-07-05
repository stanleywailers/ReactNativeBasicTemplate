import React from 'react';
import {ScrollView, Text, View, Linking} from 'react-native';
import {HomeMenuComponent} from '../components/HomeMenuComponent';
import {homeScreenStyles} from '../theme/homeScreenStyles';
import Ic_Appointment from '../assets/ic_appointment.svg';
import Ic_Promotions from '../assets/ic_promotions.svg';
import Ic_My_Account from '../assets/ic_my_account.svg';
import DeviceInfo from 'react-native-device-info';
import Constants from '../resources/Constants';

export const HomeScreen = () => {
  const appVersion = DeviceInfo.getVersion();
  return (
    // <ScrollView style={{backgroundColor: 'transparent', flex: 1}}>    </ScrollView>
    <View style={{ backgroundColor: '#E5E5E5',flex:1}}>
      <View
        style={{ flex: 1, justifyContent:'center'}}>
        <HomeMenuComponent svgIcon={Ic_Appointment} footerColor="#E68038" />
        <HomeMenuComponent svgIcon={Ic_Promotions} footerColor="#3F80EC" />
        <HomeMenuComponent svgIcon={Ic_My_Account} footerColor="#00559C" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 18,
          marginBottom:20
        }}>
        <Text onPress={async () => await Linking.openURL(Constants.TermsAndConditionsUri) }
          style={{
            color: '#2097F6',
            fontSize: 12,
          }}>
          Términos y condiciones
        </Text>
        <Text
          style={{
            fontSize: 12,
          }}>
          Versión: {appVersion}{' '}
        </Text>
      </View>
    </View>
  );
};
