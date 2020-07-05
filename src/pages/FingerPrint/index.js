import React, { useState, useEffect } from 'react';
import {View, TouchableOpacity, TouchableHighLight, useColorScheme, Image, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MenuBar from '../../component/MenuBar';
import styles from '../Switch/styles';

import TouchID from  'react-native-touch-id';


import logo from '../../../images/logo.png';
import imgFinger from '../../../images/digital.png' 

export default function FingerPrint(props){

    const [supported, setSupported] = useState(null);

    useEffect(() =>{
        TouchID.isSupported()
        .then(sucess =>{
            setSupported(true);
            //alert("Touch Id habilitado");
        })
        .catch(() => {
            //console.log("erro touch");
            alert("Touch Id não suportado/habilitado");
        })
    }, []);

    function handle(){
        const configs = {
            title: "Autenticacao Touch id",
            imageColor: '#e00606',
            sensorErrorDescription: "Touch ID invalido",
            sensorErrorDescription: 'Failed',
        };
        TouchID.authenticate("Auticacao", configs)
        .then((sucess)=>{
            console.log("autorizado");
            //navigateToSucess();
        })
        .catch((error)=>{
            console.log("falha na autenticacao" + error);
            //navigateToFail();
        });
    }

    const navigation = useNavigation();

    function navigateToFail(){
        navigation.navigate('Fail');
    }

    function navigateToSucess(){
        navigation.navigate('Sucess');
    }

    return(
        <View style={styles.container} >
            
            <MenuBar {...props} navigation={navigation}/>

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

                    <TouchableHighLight style={styles.btn} onPress={ handle }>
                        <Text>
                            Iniciar.
                        </Text>
                    </TouchableHighLight>
                    
            </View>
        
        </View>

    );
}