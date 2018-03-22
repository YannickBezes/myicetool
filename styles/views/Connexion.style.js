import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    containerbis: {
        flex: 1
    },
    container: {
        flex : 1,
    },
    logoContainer:{
        alignItems:'center',
        flexGrow: 1,
        justifyContent: 'center'
    }
    ,
    logo: {
        width: 300,
        height: 80
    },
    title:{
        color: '#000',
        fontSize: 22,
        marginTop: 10

    },
    formContainer: {
        justifyContent: 'center',
        paddingBottom:150
    }
})