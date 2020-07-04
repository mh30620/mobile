import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import MenuBar from '../../component/MenuBar';

import logo from '../../../images/logo.png';
import styles from './styles';

export default function ManageAuth(){
    
    const navigation = useNavigation();

    function navigateToManageFingerPrints(){
        navigation.navigate('ManageFingerPrint');
    }

    function navigateToManageFaces(){
        navigation.navigate('ManageFaces');
    }
    
    return(
        <View style={styles.container} >
            
            <MenuBar/>

            <View style={styles.content}>
                    
                    <Text style={styles.text}>
                        Gerenciar autenticações
                    </Text>
                    
                    <TouchableOpacity 
                        style={styles.action}
                        onPress={ () => navigateToManageFingerPrints()}
                    >
                        <Text style={styles.actionText}> Biometria</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.action} onPress={ () => navigateToManageFaces()} >
                        <Text style={styles.actionText}> Reconhecimento Facial</Text>
                    </TouchableOpacity>
            </View>
        
        </View>
    );
}