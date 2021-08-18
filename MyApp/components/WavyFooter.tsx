import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function WavyHeader({
  customStyles,
  customHeight,
  customTop,
  customBgColor,
  customWaveColor,
  customWavePattern
}:{customStyles:any, customHeight:any, customTop:any, customBgColor:any, customWaveColor:any, customWavePattern:any}) {
  return (
    <View style={customStyles}>
      <View style={{ height: customHeight }}>
        <Svg
          height="100%"
          width="60%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', bottom: 0 }}
        >
          <Path fill={customWaveColor} fill-opacity="1" d={customWavePattern} />
        </Svg>
      </View>
    </View>
  );
}