import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Switch from './pages/Switch';
import Face from './pages/Face';
import FingerPrint from './pages/FingerPrint';
import Fail from './pages/Fail';
import Sucess from './pages/Sucess';


export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}} >
                <AppStack.Screen name="Switch" component={Switch}/>
                <AppStack.Screen name="Face" component={Face}/>
                <AppStack.Screen name="FingerPrint" component={FingerPrint}/>
                <AppStack.Screen name="Fail" component={Fail}/>
                <AppStack.Screen name="Sucess" component={Sucess}/>
            </AppStack.Navigator>
            
        </NavigationContainer>
    );
}