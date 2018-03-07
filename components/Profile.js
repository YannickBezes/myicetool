import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'

import ComForm from './ComForm'

import styles from '../styles/components/Profile.style'

export default class Profile extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = { cascade: this.props.navigation.state.params.cascade }
    }

    componentDidMount() {
        AsyncStorage.getItem('user').then(user => {
            if(!user) {
                this.props.navigation.navigate('Connexion')
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Edite ton commentaire</Text>
                <ComForm navigation={this.props.navigation} cascade={this.state.cascade} />
            </View>
        )
    }
}