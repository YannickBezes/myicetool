import { StyleSheet } from 'react-native'
import colors from './colors.style'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor
    },
    header: {
        backgroundColor: colors.primaryDarkColor,
    },
    headerTitle: {
        color: colors.primaryTextColor
    }
})