import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    container: {
        padding: 20
    },
    containerBis: {
        flex: 1
    },
    input: {
        height: 150,
        width: 400,
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
    },
    containerBis: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})