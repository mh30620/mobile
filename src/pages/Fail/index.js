import React from 'react';
import {View, Image, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MenuBar from '../../component/MenuBar';
import styles from '../Switch/styles';

import logo from '../../../images/logo.png';
import imgFail from '../../../images/falha.png' 

export default function Fail(props){
    const navigation = useNavigation();

    function navigateToSwitch(){
        navigation.navigate('Switch');
    }

    function navigateBack(){
        navigation.goBack();
    }

    return(
        <View style={styles.container} >
            
            <MenuBar {...props} navigation={navigation}/>

            <View style={styles.content}>
                    
                    <Text style={styles.title}>
                        Falha na verificação!
                    </Text>

                    <View style={styles.imgDigital}>
                        <Image source={imgFail}/>
                    </View>
                    

                    <TouchableOpacity style={styles.action} onPress={ () => navigateBack()} >
                        <Text style={styles.actionText}>Tentar Novamente</Text>
                    </TouchableOpacity>
                            
                    <TouchableOpacity style={styles.action} onPress={ () => navigateToSwitch()} >
                        <Text style={styles.actionText}>Escolher outra forma</Text>
                    </TouchableOpacity>
            </View>
        
        </View>

    );

}