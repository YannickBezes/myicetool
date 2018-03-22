import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor:'#fff',
        marginBottom: 20,
        color: '#000',
        padding: 10,
        borderRadius: 22,
        
    },
    btnContainer: {
        borderRadius: 22,
        backgroundColor: '#85d1e3',
        paddingVertical: 10
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700'
    }
})