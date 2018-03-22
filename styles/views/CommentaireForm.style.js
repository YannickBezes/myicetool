import { StyleSheet } from 'react-native'
import colors from '../colors.style'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f8fa'
    },
    text: {
        justifyContent: 'flex-start',
        color: '#FFF'
    },
    cameraView: {
        width: 350,
        height: 400,
        backgroundColor: 'red',
        transform: [{ rotate: '-90deg'}]
    },
    camera: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    cameraButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 50,
        width: 50,
        height: 50,
    },
    cameraIcon: {
        width: 35,
        height: 35,
        transform: [{ rotate: '90deg'}]
    },
    picturesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    pictureContainer: {
        width: '25%',
        height: 100,
        padding: 10,
        transform: [{ rotate: '-90deg'}]
    },
    picture: {
        ...StyleSheet.absoluteFillObject
    },
    removePictureButton: {
        position: 'absolute',
        right: 5,
        bottom: 5,
    },
    removePictureIcon: {
        width: 15,
        height:15
    },
    textTakePicture: {
        fontSize: 16,
        fontWeight: '600'
    }
})