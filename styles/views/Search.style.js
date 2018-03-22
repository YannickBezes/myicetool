import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    containerbis: {
        flex: 1
    },
    container: {
        margin: 20,
        flex: 1,
        alignItems: 'center'
    },
    btnSearch: {
        backgroundColor: '#85d1e3',
        padding: 10,
        alignItems: 'center',
        width: 300,
        borderRadius: 20
    },
    textBtn: {
        color: colors.primaryTextColor,
        fontSize: 17
    },
    containerBrand: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: 'transparent'
    },
    brand: {
        width: 300,
        height: 80
    },
})