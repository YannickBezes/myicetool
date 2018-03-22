import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#f5f8fa',
        padding: 10
    },
    textColor: {
        color: '#777',
        fontSize: 17,
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