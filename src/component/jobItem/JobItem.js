import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '../button/Button';
import Styles from "./JobItemStyle";

const JobItem = ({item, handleClick, customButton}) => {
  return (
    <TouchableOpacity onPress={handleClick} disabled={customButton != null}>
      <View style={Styles.jobItem}>
        <Text style={Styles.jobName}>{item.name}</Text>
        <Text style={Styles.companyName}>{item.company.name}</Text>
        <View style={Styles.locationContainer}>
          <Text style={Styles.locationName}>{item.locations[0].name}</Text>
          <Text></Text>
        </View>
        <Text style={Styles.levelName}>{item.levels[0].name}</Text>
        { customButton &&
          <Button text={customButton.name} icon={customButton.icon} handleClick={customButton.handleClick} />

        }
      </View>
    </TouchableOpacity>
  );
};

export default JobItem;
