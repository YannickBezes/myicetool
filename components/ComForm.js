import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, AsyncStorage, Alert, Keyboard } from 'react-native'
import { StackNavigator } from 'react-navigation'

import styles from '../styles/components/ComForm.style'

export default class ComForm extends Component {

    // Hide header
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = { commentaire: '', cascade: this.props.cascade }
    }

    disconnect() {
        AsyncStorage.removeItem('user')
        this.props.navigation.goBack()
    }

    async publish() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        fetch(`https://myicetool.bsy.ovh/api/cascades/${this.state.cascade.id}/commentaire`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contenu: this.state.commentaire,
                user_id: user.id
            })
        }).then(res => res.json())
        .then(data => {
            Keyboard.dismiss()
            this.props._handleButtonClick(data)
            this.props.navigation.goBack()
        })
        .catch(e => alert(JSON.stringify(e)))
    }

    render() {
        return(
            <View style={styles.container}>
                <TextInput style={styles.input}
                    multiline={true}
                    numberOfLines={8}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    placeholder="Votre commentaire"
                    returnKeyType="go"
                    onChangeText={ commentaire =>this.setState({commentaire})}
                    value={this.state.commentaire}
                    underlineColorAndroid='transparent'
                />

                <View style={styles.containerBis}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.publish()}>
                        <Text style={styles.buttonText}>Publier</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.disconnect()}>
                        <Text style={styles.buttonText}>Deconexion</Text>
                    </TouchableOpacity>
               </View>      
            </View>
        )
    }
}