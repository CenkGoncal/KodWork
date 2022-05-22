import * as React from 'react';
import {View, FlatList,Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import JobItem from '../../component/jobItem/JobItem';

const JobFav = () => {
  const favlist = useSelector(w => w.favorities);
  const dispatch = useDispatch();



  const renderJob = ({item}) => {

    const customButton = {
      name:"Remove",
      icon:"remove",
      handleClick : ()=> {
        dispatch({type: "REMOVE_FAVORITE", payload: { item  }});
      }
    }

    return <JobItem item={item} customButton={customButton} />;
  };

  const listEmpty = () => {
    return(
      <View style={{flex:1,justifyContent:"center",alignSelf:"center"}}>
        <Text style={{color:"tomato",fontWeight:"bold"}}>List Empty</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={favlist}
        keyExtractor={item => item.id.toString()}
        renderItem={renderJob}
        ListEmptyComponent={listEmpty}
      /> 
    </View>
  );
};

export default JobFav;
