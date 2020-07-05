import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import MenuBar from '../../component/MenuBar';

import logo from '../../../images/logo.png';
import imgFace from '../../../images/pessoa.png' 
import styles from '../Switch/styles';

export default function ManageFaces(){
    
    const navigation = useNavigation();

    function navigateToRegisterFace(){
        navigation.navigate('RegisterFace');
    }

    function navigateToDeleteFace(){
        navigation.navigate('DeleteFace');
    }


    
    return(
        <View style={styles.container} >
            
            <MenuBar/>

            <View style={styles.content}>
                    
                    <Text style={styles.text}>
                        Faces Cadastradas
                    </Text>

                    <View style={styles.cards}>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.imgCard } source={imgFace} ></Image>
                            <Text style={styles.nameCard} >João</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.imgCard} source={imgFace} ></Image>
                            <Text style={styles.nameCard} >Maria</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.imgCard} source={imgFace} ></Image>
                            <Text style={styles.nameCard} >José</Text>
                        </TouchableOpacity>
                    </View>
                    
                    
                    <TouchableOpacity 
                        style={styles.action}
                        onPress={ () => navigateToRegisterFace()}
                    >
                        <Text style={styles.actionText}> Registrar Face</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.action} onPress={ () => navigateToDeleteFace()} >
                        <Text style={styles.actionText}> Deletar face selecionada</Text>
                    </TouchableOpacity>
            </View>
        
        </View>
    );
}