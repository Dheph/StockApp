import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home'
import Login from './pages/Login'
import NewCheck from './pages/NewCheck';
import LastCheck from './pages/LastCheck';
import ViewGroups from './pages/ViewGroups';
import CreateCheck from './pages/createCheck';
import Signature from './pages/Signature';


const AppStack = createStackNavigator();

export default function Routes() {

    return (

        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="login" component={Login}/>            
                <AppStack.Screen name="home" component={Home}/>            
                <AppStack.Screen name="newcheck" component={NewCheck}/>            
                <AppStack.Screen name="lastcheck" component={LastCheck}/>            
                <AppStack.Screen name="viewgroups" component={ViewGroups}/>            
                <AppStack.Screen name="createcheck" component={CreateCheck}/>            
                <AppStack.Screen name="createsignature" component={Signature}/>            
            </AppStack.Navigator>
        </NavigationContainer>
    )


}