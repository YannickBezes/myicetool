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
    btnComments: {
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fa5c62'
    },
    btnCommentsText: {
        color: 'white',
        fontSize: 16
    },
    label: {
        color: '#000'
    },
    tabBar: {
        backgroundColor: '#85d1e3'
    },
    tabBarLabel: {
        fontSize: 18
    },
    tabBarIndicator: {
        backgroundColor: colors.primaryTextColor
    },
    containerComments: {
        flex:1,
        flexDirection: 'column-reverse'
    }
})