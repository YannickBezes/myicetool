import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    commentaireContainer: {
        backgroundColor: '#C2D5ED',
        minHeight: 100,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#95A6BC'
    },
    avatarContainer: {
        width: 100,
        alignItems: 'center',
        marginTop: 15
    },
    contentContainer: {
        flex: 1,
        paddingVertical: 10
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    usernameContainer: {
        flexDirection: 'column',
        marginBottom: 5,
        marginRight: 10
    },
    username: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginRight: 10
    },
    libelle: {
        color: '#286273',
        marginRight: 10
    },
    commentaireDate: {
        color: '#286273'
    },
    commentaire: {
        color: '#FFFFFF',
        fontSize: 17,
        lineHeight: 25,
        marginBottom: 10
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image: {
        width: 100,
        height: 100
    }
})