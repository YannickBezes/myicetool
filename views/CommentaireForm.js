import React, { Component } from 'react'
import { Text, View, AsyncStorage, TouchableOpacity, Keyboard, Image } from 'react-native'
import Camera from 'react-native-camera'

import ComForm from '../components/ComForm'

import styles from '../styles/views/CommentaireForm.style'

export default class CommentaireForm extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            cascade: this.props.navigation.state.params.cascade,
            showCamera: false,
            pictures: []
        }
        this._toggleCamera = this._toggleCamera.bind(this)
        this._takePicture = this._takePicture.bind(this)   
        this._onPictureTaken = this._onPictureTaken.bind(this)
        this._removePicture = this._removePicture.bind(this)
    }

    componentDidMount() {
        AsyncStorage.getItem('user').then(user => {
            if(!user) {
                this.props.navigation.navigate('Connexion')
            }
        })
    }

    _toggleCamera () {
        Keyboard.dismiss()
        this.setState({showCamera: !this.state.showCamera})
    }

    _takePicture () {
        if (!this._camera) {
            return;
        }
        this._camera.capture({})
        .then(this._onPictureTaken)
        .catch((err) => console.warn('Erreur appareil photo ' + err));
    }

    _onPictureTaken (picture) {
        // Cacher l'appareil photo
        this.setState({
            showCamera: false,
            pictures: [...this.state.pictures, picture.path]
        })
    }

    _removePicture (index) {
        const newArray = this.state.pictures
        newArray.splice(index, 1)
        this.setState({pictures : newArray})
    }

    _onSendTweet (comments) {
        const data = new FormData();
        this.state.pictures.forEach((picture) => {
            data.append('photo', {
                uri: picture,
                type: 'image/jpeg', // or photo.type
                name: 'photo.jpg'
            })

            fetch(`https://myicetool.bsy.ovh/api/commentaires/${comments.id}/photo`, {
                method: 'POST',
                body: data
            })
            .catch( err => {
                console.warn("Impossible d'envoyer le tweet : " + err);
            })
        })
    }

    get pictures () {
        if (!this.state.pictures.length) {
            return false;
        }
        const pics = this.state.pictures.map((picture, index) => {
            return (
                <View
                  key={`picture-${index}`}
                  style={styles.pictureContainer}
                >
                    <Image
                      source={{ uri: picture }}
                      style={styles.picture}
                    />
                    <TouchableOpacity
                      onPress={() => this._removePicture(index)}
                      style={styles.removePictureButton}
                    >
                        <Text>Remove</Text>
                    </TouchableOpacity>
                </View>
            );
        });
        return (
            <View style={styles.picturesContainer}>
                { pics }
            </View>
        )
    }

    get camera () {
        if (!this.state.showCamera) {
            return false;
        }
        return (
            <View style={styles.cameraView}>
                <Camera
                  ref={(c) => this._camera = c}
                  style={styles.camera}
                  aspect={Camera.constants.Aspect.fill}
                  orientation={'landscapeRight'}
                >
                    <TouchableOpacity
                      style={styles.cameraButton}
                      onPress={this._takePicture}
                    >
                        <Text>Prendre photo</Text>
                    </TouchableOpacity>
                </Camera>
            </View>
        );
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Edite ton commentaire</Text>
                { this.camera }
                <ComForm navigation={this.props.navigation} cascade={this.state.cascade} _handleButtonClick={this.props.navigation.state.params._handleButtonClick} send={this._onSendTweet.bind(this)} />
                { this.pictures }
                <TouchableOpacity onPress={this._toggleCamera}>
                    <Text>Prendre photo</Text>
                </TouchableOpacity>
            </View>
        )
    }
}