import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'; 
import { Menu, Provider, Button } from 'react-native-paper';

import logo from '../../../images/logo.png';
import styles from './styles';


export default class MenuBar extends React.Component{

    state = {
        visible: false,
      };
    
      _openMenu = () => this.setState({ visible: true });
    
      _closeMenu = () => this.setState({ visible: false });


    render(){
        const { navigation } = this.props;
        return( 
            <Provider style={styles.component}>
                <View style={styles.bar}>
                    <Image source={logo} />
                    <Menu visible={this.state.visible}
                        onDismiss={this._closeMenu}
                        anchor={
                            <Button onPress={this._openMenu} >
                                <Feather style={styles.iconmenu} name="menu" size={24} color="#122766" />
                            </Button>
                        }
                    >
                        <Menu.Item onPress={() => navigation.navigate('Switch')} title="Autenticação" />
                        <Menu.Item onPress={()=> navigation.navigate('ManageAuth')} title="Gerenciar autenticações" />
                        
                    </Menu>
                    
                </View>
            </Provider>           
            
        );
    }
    
}