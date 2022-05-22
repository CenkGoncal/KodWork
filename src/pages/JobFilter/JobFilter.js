import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../component/button/Button';

import Styles from './JobFilterStyle';

const JobFilter = ({navigation}) => {
  const joblevel = [
    'Entry Level',
    'Senior Level',
    'Internship',
    'Mid Level',
    'management',
  ];

  const [selectLevel, setSelectLevel] = useState('Select Job Level');
  const [stateDrop, setStateDrop] = useState(false);

  const handleDrop = () => {
    setStateDrop(!stateDrop);
  };

  const selectDrop = text => {
    setSelectLevel(text);
    setStateDrop(!stateDrop);
  };

  const searchJob = () => {

    navigation.navigate("JobPage",{joblevel:selectLevel},true);

  };

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.logo}>Job Filter</Text>
      </View>
      <View style={{padding: 8, flex: 1}}>
        <TouchableOpacity style={Styles.dropBox} onPress={handleDrop}>
          <TextInput editable={false} style={Styles.dropHeader}>
            {selectLevel}
          </TextInput>
          <Icon
            name={stateDrop ? 'caret-up' : 'caret-down'}
            color="gray"
            size={15}
          />
        </TouchableOpacity>
        {stateDrop && (
          <FlatList
            style={Styles.dropdown}
            data={joblevel}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Text onPress={() => selectDrop(item)} style={Styles.dropItem}>
                {item}
              </Text>
            )}
          />
        )}
      </View>
      <View style={{flexDirection:"row",flex:1, justifyContent:"space-around"}}>
        <Button text="Reset" icon="remove" handleClick={() => setSelectLevel("Select Job Level")} />
        <Button text="Filter" icon="search" handleClick={() => searchJob()} />
      </View>
    </View>
  );
};

export default JobFilter;
