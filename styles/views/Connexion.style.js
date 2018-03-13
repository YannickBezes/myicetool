import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor:'#465F7F'
    },
    logoContainer:{
        alignItems:'center',
        flexGrow: 1,
        justifyContent: 'center'
    }
    ,
    logo: {
        width: 200,
        height: 200
    },
    title:{
        color: '#FFF',
        fontSize: 22,
        marginTop: 10

    },
    formContainer: {
       
        justifyContent: 'center',
        paddingBottom:150
    }
})