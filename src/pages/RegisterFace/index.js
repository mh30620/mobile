import React from 'react';
import {View, Button, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MenuBar from '../../component/MenuBar';
import ProgressBar from '../../component/ProgressBar';
import styles from '../Switch/styles';

import logo from '../../../images/logo.png';

export default function RegisterFace(){

    const navigation = useNavigation();

    function navigateToFail(){
        navigation.navigate('Fail');
    }

    function navigateToSucess(){
        navigation.navigate('Sucess');
    }

    return(
        <View style={styles.container} >
            
            <MenuBar/>

            <View style={styles.content}>
                    
                <Text style={styles.title}>
                    Posicione-se frente a câmera frontal para captura da face
                </Text>
                    
                <View style={styles.cam}>
                    <Text style={styles.camText}>
                        Câmera da pessoa
                    </Text>
                 </View>

                <ProgressBar/>
                    
            </View>
            
                    
            
        
        </View>

    );
}