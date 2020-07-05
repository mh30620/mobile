import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        backgroundColor: "#FFF059",
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },

    content:{
        flex:1,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center',
    },

    title:{
        fontSize: 22,
        marginTop: 25,
        marginHorizontal: 20,
    },

    text:{
        fontSize: 21,
        marginTop: -40,
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
        backgroundColor: '#C4C4C4',
        width: '70%',
        height: '64%',
        marginTop: 40,
    },

    camText:{
        fontSize:15,
        textAlign: "center",
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