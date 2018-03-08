import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, AsyncStorage } from 'react-native'

import LoginForm from '../components/LoginForm'

import styles from '../styles/components/Connexion.style'

export default class Connexion extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./octocat.png')}
                    />
                    <Text style={styles.title}>Connexion My Ice Tool</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigation={this.props.navigation}/>
                </View>
            </View>
        )
    }
}