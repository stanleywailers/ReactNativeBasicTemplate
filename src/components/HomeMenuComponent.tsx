import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {homeScreenStyles} from '../theme/homeScreenStyles';
import {useNavigation} from '@react-navigation/native';

export interface Props {
  svgIcon: React.FC<SvgProps>;
  footerColor: string;
  navigateToScreen: string;
}

export const HomeMenuComponent = ({
  svgIcon,
  footerColor,
  navigateToScreen,
}: Props) => {
  const navigation = useNavigation();

  const Icon = svgIcon as React.FC<SvgProps>;

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate(navigateToScreen as never)}>
      <View style={homeScreenStyles.optionContainer}>
        <Icon style={homeScreenStyles.optionIcon}></Icon>
        <View
          style={{
            ...homeScreenStyles.optionFooter,
            backgroundColor: footerColor,
          }}></View>
      </View>
    </TouchableWithoutFeedback>
  );
};
