import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import JobItem from '../../component/jobItem/JobItem';
import Icon from 'react-native-vector-icons/FontAwesome';

import UseFetch from '../../customhook/UseFetch/UseFetch';
import Styles from './JobStyle';

const Job = ({navigation, route}) => {
  const {data, error, isLoading, Fetch} = UseFetch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    let url = `/jobs?`;
    
    if (route.params?.joblevel) url += `level=${route.params?.joblevel}`;
    if (route.params?.joblevel && page) url += `&page=${page}`;
    else url += `page=${page}`;

console.log(url);
    Fetch(url);

    return () => {};
  }, [page, route.params?.joblevel]);

  const renderJob = ({item}) => {
    return (
      <JobItem
        item={item}
        handleClick={() => navigation.navigate('JobDetailPage', {item: item})}
      />
    );
  };
  const PaginationItem = ({isDecrease, icon, size}) => {
    return (
      <TouchableOpacity
        onPress={() => (isDecrease ? setPage(page - 1) : setPage(page + 1))}>
        <Icon name={icon} size={size} color="white" />
      </TouchableOpacity>
    );
  };
  const HeadePagination = () => {
    return (
      <View style={Styles.header}>
        <Text style={Styles.logo}>KodWork</Text>
        <View style={Styles.paginationContainer}>
          <PaginationItem
            icon="arrow-left"
            Styles={Styles.arrow}
            size={15}
            isDecrease={true}
          />
          <Text style={Styles.pageNumber}>{page}</Text>
          <PaginationItem
            icon="arrow-right"
            Styles={Styles.arrow}
            size={15}
            isIncrease={true}
          />
          <FilterButton />
        </View>
      </View>
    );
  };

  const FilterButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('JobFilterPage')}>
        <Icon name={'filter'} size={20} color="white" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={Styles.container}>
      <HeadePagination />
      {isLoading ? (
        <View style={Styles.center}>
          <ActivityIndicator color={'tomato'} size="large" />
        </View>
      ) : (
        <>
          <FlatList
            data={data}
            onRefresh={() => setPage(page - 1)}
            onEndReachedThreshold={0.5}
            onEndReached={() => setPage(page + 1)}
            keyExtractor={item => item.id.toString()}
            renderItem={renderJob}
          />
        </>
      )}
    </View>
  );
};

export default Job;
