import React from 'react';
import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {homeScreenStyles} from '../theme/homeScreenStyles';

export interface Props {
  svgIcon: React.FC<SvgProps>;
  footerColor: string;
}

export const HomeMenuComponent = ({svgIcon, footerColor}: Props) => {
  const Icon = svgIcon as React.FC<SvgProps>;
  return (
    <View style={homeScreenStyles.optionContainer}>
      <Icon style={homeScreenStyles.optionIcon}></Icon>
      <View
        style={{
          ...homeScreenStyles.optionFooter,
          backgroundColor: footerColor,
        }}></View>
    </View>
  );
};
