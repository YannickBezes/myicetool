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
        backgroundColor: '#d5d5d5',
        margin: 20,
        color: '#000',
        padding: 10,
        borderRadius: 10,
        fontSize: 16
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 50,
        backgroundColor: '#85d1e3',
        margin: 10,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 18
    }
})