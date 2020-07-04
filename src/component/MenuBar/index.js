import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons'; 


import logo from '../../../images/logo.png';
import styles from './styles';

export default function Switch(){

    
    return(            
        <View style={styles.bar}>
            <Image source={logo} />
            <Feather style={styles.iconmenu} name="menu" size={24} color="#122766" />
        </View>

    );
}