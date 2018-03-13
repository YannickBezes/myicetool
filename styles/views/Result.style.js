import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    labelContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex : 1
    },
    btnAvis: {
        margin: 20,
        color: colors.primary
    },
    label: {
        color: 'white'
    },
    tabBar: {
        backgroundColor: colors.primaryDarkColor
    }
})