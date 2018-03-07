import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFFFFF',
        padding: 10,
        borderRadius: 22,
        
    },
    btnContainer: {
        borderRadius: 22,
        backgroundColor: '#2980b9',
        paddingVertical: 10
    },
    btnText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
})