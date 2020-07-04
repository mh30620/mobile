import React from 'react';
import {View, Button, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MenuBar from '../../component/MenuBar';
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
                    Aproxime-se e posicione a face frente a câmera frontal para que possamos capturar a face
                </Text>
                    
                <View style={styles.cam}>
                    <Text style={styles.camText}>
                        Câmera da pessoa
                    </Text>
                 </View>

                 <View style={styles.btnsTeste}>
                    <Text>Barra de progresso aqui.. implementar ainda!</Text>
                </View>
                    
            </View>
            
                    
            
        
        </View>

    );
}