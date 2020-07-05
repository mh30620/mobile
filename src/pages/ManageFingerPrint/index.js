import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import MenuBar from '../../component/MenuBar';

import logo from '../../../images/logo.png';
import imgFinger from '../../../images/digital_small.png' 
import styles from '../Switch/styles';

export default function ManageFingerPrint(props){
    
    const navigation = useNavigation();

    function navigateToRegisterFingerPrints(){
        navigation.navigate('RegisterFingerPrint');
    }

    function navigateToDeleteFingerPrint(){
        navigation.navigate('DeleteFingerPrints');
    }
    
    return(
        <View style={styles.container} >
            
            <MenuBar {...props} navigation={navigation}/>

            <View style={styles.content}>
                    
                    <Text style={styles.text}>
                        Biometrias Cadastradas
                    </Text>

                    <View style={styles.cards}>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.imgCard} source={imgFinger} ></Image>
                            <Text style={styles.nameCard} >João</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.imgCard} source={imgFinger} ></Image>
                            <Text style={styles.nameCard}> Maria</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card}>
                            <Image style={styles.imgCard} source={imgFinger} ></Image>
                            <Text style={styles.nameCard} > José </Text>
                        </TouchableOpacity>
                    </View>
                    
                    
                    <TouchableOpacity 
                        style={styles.action}
                        onPress={ () => navigateToRegisterFingerPrints()}
                    >
                        <Text style={styles.actionText}> Registrar nova biometria</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.action} onPress={ () => navigateToDeleteFingerPrint()} >
                        <Text style={styles.actionText}> Deletar uma biometria</Text>
                    </TouchableOpacity>
            </View>
        
        </View>
    );
}