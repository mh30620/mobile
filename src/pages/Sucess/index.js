import React from 'react';
import {View, Image, Text } from 'react-native';
import MenuBar from '../../component/MenuBar';
import styles from '../Switch/styles';


import logo from '../../../images/logo.png';
import imgSucess from '../../../images/certo.png' 

export default function Sucess(){
    return(
        <View style={styles.container} >
            
            <MenuBar/>

            <View style={styles.content}>
                    
                    <Text style={styles.title}>
                        Ação concluída com sucesso!
                    </Text>

                    <View style={styles.imgDigital}>
                        <Image source={imgSucess}/>
                    </View>
                    
            </View>
        
        </View>

 
    );
}