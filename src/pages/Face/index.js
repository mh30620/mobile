import React from 'react';
import {View, Button, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MenuBar from '../../component/MenuBar';
import styles from '../Switch/styles';

import logo from '../../../images/logo.png';

export default function Face(){

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
                    Reconhecimento Facial
                </Text>
                    
                <View style={styles.cam}>
                    <Text style={styles.camText}>
                        Câmera da pessoa
                    </Text>
                 </View>

                 <View style={styles.btnsTeste}>
                    <TouchableOpacity style={styles.btn} onPress={ () => navigateToSucess()} >
                        <Text> Sucess</Text>
                    </TouchableOpacity>
                        
                    <TouchableOpacity style={styles.btn} onPress={ () => navigateToFail()}>
                        <Text> Fail</Text>
                    </TouchableOpacity>
                </View>
                    
            </View>
            
                    
            
        
        </View>

    );
}