import * as React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './ButtonStyle';

import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({text, icon, handleClick, size}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Icon name={icon} size={size} color="white" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
