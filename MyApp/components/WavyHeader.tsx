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
          style={{ position: 'absolute', top: customTop }}
        >
          <Path fill={customWaveColor} fill-opacity="1" d={customWavePattern} />
        </Svg>
      </View>
    </View>
  );
}

// import React from "react";
// import { View } from 'react-native';
// import Svg, { Path } from "react-native-svg";

// export default function WavyHeader({ customStyles}:{customStyles:any}) {
//     return (
//         <View style={customStyles}>
//           <View style={{ backgroundColor: '#5000ca', height: 160 }}>\

//             <Svg viewBox="0 0 1440 320">
//                 <Path fill="#000b76" fill-opacity="1" 
//                 d="M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,229.3C672,203,768,149,864,149.3C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
//                 </Path>
//             </Svg>
//           </View>
//         </View>
//       );
// }