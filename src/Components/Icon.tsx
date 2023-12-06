import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyIcon = () => {
  return (
    <View>
      <Text>Hello, this is an icon:</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default MyIcon;
