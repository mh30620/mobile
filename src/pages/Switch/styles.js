import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        backgroundColor: "#ffffff",
        flex: 1,
        
    },

    content:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',
    },

    title:{
        fontSize: 22,
        marginTop: -250,
        marginHorizontal: 20,
    },


    text:{
        fontSize: 21,
        marginTop: -300,
        marginBottom: 40,
        marginHorizontal: 20,
        textAlign: "center",
        
    },

    textDescription:{
        fontSize: 18,
        marginTop: 30,
        textAlign: 'center',
        marginHorizontal:30,
    },

    cam:{
        width: '85%',
        height: '130%',
        marginTop: 20,
        
    },

    btnCam:{
        alignSelf: 'flex-end',
        alignItems:'center',
     
    },

    iconCam:{
        margin: 5,
        alignSelf: 'center',
    },


    imgDigital:{
        marginTop:25,
    },

    cards:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#040429',
    },

    card:{
        marginHorizontal:10,
        backgroundColor: '#fff',
        marginVertical: 10,
    },

    imgCard: {
        marginTop: 10,
        marginHorizontal: 5,
    },

    nameCard:{
        textAlign: 'center',
        marginTop: 2,
    },

    action:{
        backgroundColor: '#3483FA',
        borderRadius:2,
        height:50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    actionText:{
        color:'#FFFFFF',
        fontSize:17,
        fontWeight: 'bold'
    },




    

    
});