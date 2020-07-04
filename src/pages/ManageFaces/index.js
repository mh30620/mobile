import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import MenuBar from '../../component/MenuBar';

import logo from '../../../images/logo.png';
import imgFinger from '../../../images/digital.png' 
import styles from './styles';

export default function ManageFaces(){
    
    const navigation = useNavigation();

    function navigateToRegisterFingerPrints(){
        navigation.navigate('RegisterFingerPrint');
    }

    function navigateToDeleteFingerPrint(){
        navigation.navigate('DeleteFingerPrint');
    }
    
    return(
        <View style={styles.container} >
            
            <MenuBar/>

            <View style={styles.content}>
                    
                    <Text style={styles.text}>
                        Rostos Cadastrados
                    </Text>

                    <View style={styles.cardFinger}>
                        <Image style={styles.imgFinger} source={imgFinger} ></Image>
                        <Text style={styles.nameFinger} >Thauany</Text>
                    </View>
                    <View style={styles.cardFinger}>
                        <Image style={styles.imgFinger} source={imgFinger} ></Image>
                        <Text style={styles.nameFinger} >Thauany</Text>
                    </View>
                    
                    <TouchableOpacity 
                        style={styles.action}
                        onPress={ () => navigateToRegisterFace()}
                    >
                        <Text style={styles.actionText}> Registrar novo Rosto</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.action} onPress={ () => navigateToDeleteFace()} >
                        <Text style={styles.actionText}> Deletar um Rosto</Text>
                    </TouchableOpacity>
            </View>
        
        </View>
    );
}