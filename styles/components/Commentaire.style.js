import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    commentaireContainer: {
        backgroundColor: '#f5f8fa',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#95A6BC',
        padding: 15,
        paddingLeft: 0
    },
    avatarContainer: {
        width: 100,
        alignItems: 'center',
    },
    contentContainer: {
        flex: 1,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    comments: {
        flexDirection: 'column',
        // marginBottom: 5,
        marginRight: 10
    },
    username: {
        color: '#777',
        fontWeight: 'bold',
        marginRight: 10
    },
    libelle: {
        color: '#000',
        marginRight: 10
    },
    commentaireDate: {
        color: '#777'
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image: {
        marginTop: 10,
        width: 100,
        height: 100,
        transform: [{ rotate: '-90deg'}]
    },
    containerUserDate: {
        flexDirection: 'row'
    },
    avatar: {
        width: 50,
        height: 50
    }
})