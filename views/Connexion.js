import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, AsyncStorage, ImageBackground } from 'react-native'

import LoginForm from '../components/LoginForm'

import styles from '../styles/views/Connexion.style'

export default class Connexion extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ImageBackground 
            source={require('./img/background.jpg')}
            style={styles.containerbis}
            >
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('./img/logo.png')}
                        />
                    </View>
                    <View style={styles.formContainer}>
                        <LoginForm navigation={this.props.navigation}/>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}