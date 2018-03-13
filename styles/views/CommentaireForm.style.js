import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1b2836'
    },
    text: {
        justifyContent: 'flex-start',
        color: '#FFF'
    },

    cameraView: {
        height: 300,
        width: '100%',
        backgroundColor: 'red'
    },
    camera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cameraButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 50,
        width: 50,
        height: 50
    },
    cameraIcon: {
        fontSize: 25,
        color: 'white'
    },
    picturesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    pictureContainer: {
        width: '25%',
        height: 100,
        padding: 10
    },
    picture: {
        ...StyleSheet.absoluteFillObject
    },
    removePictureButton: {
        alignSelf: 'flex-end'
    },
    removePictureIcon: {
        fontSize: 25,
        color: 'white'
    }
})