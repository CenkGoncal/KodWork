import React from 'react';
import {useState} from 'react';
import AxiosInstance from '../../component/axios/AxiosInstance';
import axios from 'axios';

const UseFetch = () => {
  const instance = AxiosInstance();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);


  const Fetch = url => {
    setLoading(true);
    instance
      .get(url)
      .then(function (response) {
 
        setData(response.data.results);
        setLoading(false);
        setError(null);

      })
      .catch(function (error) {
        setData([]);
        setLoading(false);
        setError(error);
      });
  };

  return {data, error, isLoading, Fetch};
};

export default UseFetch;
