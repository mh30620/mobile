import React from 'react';
import {View, Button, Biometria, TouchableOpacity, Image, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MenuBar from '../../component/MenuBar';
import styles from '../Switch/styles';


import logo from '../../../images/logo.png';
import imgFinger from '../../../images/digital.png' 

export default function DeleteFingerPrint(){

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
                        Deletar Biometria
                    </Text>
                    <Text style={styles.textDescription}>
                        Realmente deseja excluir essa biometria?
                    </Text>

                    <View style={styles.imgDigital}>
                        <Image source={imgFinger}/>
                        <Text>Thauany</Text>
                    </View>
                    

                    <View style={styles.btnsTeste}>
                        <TouchableOpacity style={styles.btn} onPress={ () => navigateToSucess()} >
                            <Text>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        
        </View>

    );
}