import React from 'react';
import {View, Button, Biometria, TouchableOpacity, Image, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MenuBar from '../../component/MenuBar';
import styles from '../Switch/styles';


import logo from '../../../images/logo.png';
import imgFinger from '../../../images/digital.png' 

export default function FingerPrint(){

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
                        Biometria
                    </Text>
                    <Text style={styles.textDescription}>
                        Coloque o dedo no leitor digital do seu celular
                    </Text>

                    <View style={styles.imgDigital}>
                        <Image source={imgFinger}/>
                    </View>
                    

                    <View style={styles.btnsTeste}>
                        <TouchableOpacity style={styles.btn} onPress={ () => navigateToSucess()} >
                            <Text> Sucess</Text>
                        </TouchableOpacity>
                            
                        <TouchableOpacity style={styles.btn} onPress={ () => navigateToFail()} >
                            <Text> Fail</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        
        </View>

    );
}