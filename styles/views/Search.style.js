import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    containerbis: {
        flex: 1
    },
    container: {
        margin: 20,
        flex: 1,
        zIndex: 1,
    },
    btnSearch: {
        marginTop: 10,
        backgroundColor: colors.primary,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
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
    logo: {
        margin: 10,
    },
    brand: {
        color: 'black',
        fontSize: 17,
        fontWeight: '700',
    },
})