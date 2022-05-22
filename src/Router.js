import React from 'react';
import {Text,TouchableOpacity } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Job from './pages/Job/Job';
import JobFav from './pages/JobFav/JobFav';
import JobDetail from './pages/JobDetail';
import JobFilter from './pages/JobFilter';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const JobPages = () => {
  return (
    <Stack.Navigator  >
      <Stack.Screen name="JobPage" component={Job} options={{headerShown:false}} />
      <Stack.Screen name="JobFilterPage" component={JobFilter} options={{headerShown:false}} />
      <Stack.Screen name="JobDetailPage" component={JobDetail} 
      options={({ navigation,route }) => (
        { title: route.params.item.name,
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:15
          },          
          headerLeft: () => (
            <TouchableOpacity style={{marginRight:5}}
              onPress={() => navigation.goBack()}>
                <Text style={{fontSize:20,color:"white",fontWeight: 'bold',fontStyle:"italic"}}>&#x1F448;</Text>
                <Text style={{fontSize:13,fontStyle:"italic",fontWeight: 'bold' ,color:"#fff",alignSelf:"center"}} >Jobs</Text>
            </TouchableOpacity>
          ),
        }
      )} />
    </Stack.Navigator>
  );
};

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="JobPage"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="JobPages" component={JobPages} />
      <Drawer.Screen name="JobFavPage" component={JobFav} />
    </Drawer.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};
export default Router;
