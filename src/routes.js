import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Switch from './pages/Switch';
import Face from './pages/Face';
import FingerPrint from './pages/FingerPrint';
import Fail from './pages/Fail';
import Sucess from './pages/Sucess';
import ManageAuth from './pages/ManageAuth';
import ManageFaces from './pages/ManageFaces';
import ManageFingerPrint from './pages/ManageFingerPrint';
import RegisterFace from './pages/RegisterFace';
import RegisterFingerPrint from './pages/RegisterFingerPrint';
import DeleteFace from './pages/DeleteFace';
import DeleteFingerPrints from './pages/DeleteFingerPrints';



export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}} >
                <AppStack.Screen name="ManageAuth" component={ManageAuth}/>
                <AppStack.Screen name="Switch" component={Switch}/>
                <AppStack.Screen name="Face" component={Face}/>
                <AppStack.Screen name="FingerPrint" component={FingerPrint}/>
                <AppStack.Screen name="Fail" component={Fail}/>
                <AppStack.Screen name="Sucess" component={Sucess}/>
                
                <AppStack.Screen name="ManageFaces" component={ManageFaces}/>
                <AppStack.Screen name="ManageFingerPrint" component={ManageFingerPrint}/>
                <AppStack.Screen name="RegisterFace" component={RegisterFace}/>
                <AppStack.Screen name="RegisterFingerPrint" component={RegisterFingerPrint}/>
                <AppStack.Screen name="DeleteFace" component={DeleteFace}/>
                <AppStack.Screen name="DeleteFingerPrints" component={DeleteFingerPrints}/>
            </AppStack.Navigator>
            
        </NavigationContainer>
    );
}