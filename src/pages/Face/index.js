import React, { useState, useEffect } from 'react';
import {View, Button, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import MenuBar from '../../component/MenuBar';
import styles from '../Switch/styles';

import logo from '../../../images/logo.png';

export default function Face(props){

    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState (null) 

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    snap = async () => {
        if (this.camera) {
          let photo = await this.camera.takePictureAsync();
          console.log ('photo', photo);
        }
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
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
                    Reconhecimento Facial
                </Text>
                    
                <View style={styles.cam}>
                    <Camera 
                        ref = {ref => { setCameraRef (ref);}}
                        style={{ flex: 1 }} 
                        type={Camera.Constants.Type.front}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}
                        >
                            <TouchableOpacity 
                                style={styles.btnCam}
                                onPress={() => snap()}>
                                <Entypo style={styles.iconCam} name="camera" size={40} color="white" />
                            </TouchableOpacity>

                        </View>
                    </Camera>
                   
                 </View>                    
            </View>
            
                    
            
        
        </View>

    );
}