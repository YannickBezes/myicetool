import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: colors.backgroundLightColor,
        padding: 10
    },
    textColor: {
        color: 'white',
        fontSize: 20,
        marginBottom: 5
    },
    strong: {
        fontWeight: '800'
    },
    containerText: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    list: {
        marginLeft: 20
    }
})