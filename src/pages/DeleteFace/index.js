import React from 'react';
import {View, Button, Biometria, TouchableOpacity, Image, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MenuBar from '../../component/MenuBar';
import styles from '../Switch/styles';


import logo from '../../../images/logo.png';
import imgFace from '../../../images/pessoa1.png' 

export default function DeleteFace(){

    const navigation = useNavigation();


    function navigateToSucess(){
        navigation.navigate('Sucess');
    }

    return(
        <View style={styles.container} >
            
            <MenuBar/>

            <View style={styles.content}>
                    
                    <Text style={styles.title}>
                        Deletar Face
                    </Text>
                    <Text style={styles.textDescription}>
                        Realmente deseja excluir essa Face?
                    </Text>

                    <View style={styles.card}>
                        <Image source={imgFace} style={styles.imgCard}/>
                        <Text style={styles.nameCard}>Thauany</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.action} onPress={ () => navigateToSucess()} >
                        <Text style={styles.actionText}>Confirmar</Text>
                    </TouchableOpacity>
            </View>
        
        </View>

    );
}