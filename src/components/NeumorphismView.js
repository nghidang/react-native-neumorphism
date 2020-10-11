import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

const NeumorphismView = (props) => {
  const {shadowDistance, radius, pressed} = props;

  const blur = shadowDistance * 2;
  const gradientColors = pressed
    ? ['#4da7db', '#5bc6ff']
    : ['#55b9f3', '#55b9f3'];

  const commonStyle = {
    borderRadius: radius,
    shadowRadius: blur,
    shadowOpacity: 1.0,
    elevation: 2,
  };
  const endShadow = {
    shadowOffset: {width: shadowDistance, height: shadowDistance},
    shadowColor: '#489dcf',
  };
  const startShadow = {
    shadowOffset: {width: -shadowDistance, height: -shadowDistance},
    shadowColor: '#62d5ff',
  };

  return (
    <View style={[commonStyle, endShadow]}>
      <View style={[commonStyle, startShadow]}>
        <LinearGradient
          colors={gradientColors}
          useAngle={true}
          angle={145}
          angleCenter={{x: 0.5, y: 0.5}}
          style={[
            props.style,
            {
              borderRadius: commonStyle.borderRadius,
            },
          ]}>
          {props.children}
        </LinearGradient>
      </View>
    </View>
  );
};

NeumorphismView.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  shadowDistance: PropTypes.number.isRequired,
  radius: PropTypes.number,
  pressed: PropTypes.bool,
};

NeumorphismView.defaultProps = {
  shadowDistance: 300,
  radius: 0,
  pressed: false,
};

export default NeumorphismView;
