import * as React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HTMLView from 'react-native-htmlview';
import { useDispatch } from "react-redux";

import Button from '../../component/button/Button';
import styles from './JobDetailStyle';

const JobDetail = ({route}) => {
  const {item} = route.params;
  const location = item.locations[0];
  const joblevel = item.levels[0];
  const dispatch = useDispatch();

  const Caption = ({name, value}) => {
    return (
      <View style={styles.CaptionContainer}>
        <Text style={styles.CaptionText}>{name}</Text>
        <Text style={styles.CaptionValue}>{value}</Text>
      </View>
    );
  };

  const JobOperation = jobType => {
    dispatch({type:jobType == 2 ? "ADD_FAVORITE" : "APPLY_JOB", payload: { item  }});
  }
 

  return (
    <View style={styles.container}>
      <Text style={styles.jobtitle}>{item.name}</Text>
      <Caption name="Locations:" value={location.name} />
      <Caption name="Job Level:" value={joblevel.name} />
      <Text style={[styles.jobtitle, styles.center]}>Job Detail</Text>
      <ScrollView style={styles.jobDetail}>
        <HTMLView value={item.contents} />
      </ScrollView>
      <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10,marginBottom:10}}>
        <Button text="Submit" icon="sign-out" handleClick={()=>JobOperation(1)} />
        <Button text="Favorite"  icon="heart"  handleClick={()=>JobOperation(2)} />
      </View>
    </View>
  );
};

export default JobDetail;
