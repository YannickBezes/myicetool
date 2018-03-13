import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    container: {
        margin: 20
    },
    containerBis: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        margin: 20,
        color: '#FFFFFF',
        padding: 10,
        borderRadius: 10
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 50,
        backgroundColor: '#2980b9',
        margin: 10,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
})