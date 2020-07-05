import React from 'react';
import {View, Button, Biometria, TouchableOpacity, Image, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MenuBar from '../../component/MenuBar';
import styles from '../Switch/styles';


import logo from '../../../images/logo.png';
import imgFinger from '../../../images/digitalmd.png' 

export default function DeleteFingerPrints(){

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

                    <View style={styles.card}>
                        <Image style={styles.imgCard} source={imgFinger}/>
                        <Text style={styles.nameCard}>Thauany</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.action} onPress={ () => navigateToSucess()} >
                         <Text style={styles.actionText}>Confirmar</Text>
                    </TouchableOpacity>
            </View>
        
        </View>

    );
}