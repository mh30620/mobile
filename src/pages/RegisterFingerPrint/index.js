import React from 'react';
import {View, Biometria, TouchableOpacity, Image, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MenuBar from '../../component/MenuBar';
import ProgressBar from '../../component/ProgressBar';
import styles from '../Switch/styles';


import logo from '../../../images/logo.png';
import imgFinger from '../../../images/digital.png' 

export default function RegisterFingerPrint(){

    const navigation = useNavigation();

    function navigateToSucess(){
        navigation.navigate('Sucess');
    }

    return(
        <View style={styles.container} >
            
            <MenuBar/>

            <View style={styles.content}>
                    
                    <Text style={styles.title}>
                        Biometria
                    </Text>
                    <Text style={styles.textDescription}>
                        Coloque o dedo no leitor digital do seu celular em diferentes posições
                    </Text>

                    <View style={styles.card}>
                        <Image style={styles.imgCard} source={imgFinger}/>
                    </View>
                    
                    <ProgressBar/>
                    
            </View>
        
        </View>

    );
}