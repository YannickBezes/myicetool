import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    containerbis: {
        margin: 20
    },
    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
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
        marginBottom: 20
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