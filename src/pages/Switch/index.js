import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 
import MenuBar from '../../component/MenuBar';

import logo from '../../../images/logo.png';
import styles from './styles';

export default function Switch(props){
    
    const navigation = useNavigation();

    function navigateToFingerPrint(){
        navigation.navigate('FingerPrint');
    }

    function navigateToFace(){
        navigation.navigate('Face');
    }
    
    return(
        <View style={styles.container} >
            
            <MenuBar {...props} navigation={navigation}/>

            <View style={styles.content}>
                    
                    <Text style={styles.text}>
                        Escolha um tipo de verificação para continuar sua compra
                    </Text>
                    
                    <TouchableOpacity 
                        style={styles.action}
                        onPress={ () => navigateToFingerPrint()}
                    >
                        <Text style={styles.actionText}> Biometria</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.action} onPress={ () => navigateToFace()} >
                        <Text style={styles.actionText}> Reconhecimento Facial</Text>
                    </TouchableOpacity>
            </View>
        
        </View>
    );
}