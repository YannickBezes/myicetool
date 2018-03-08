import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

import styles from '../styles/components/LoginForm.style'

export default class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = { username: 'laravel.admin@gmail.com', password: 'laravel' }
    }
    
    async login() { 
        try {
            const RES = await fetch('https://myicetool.bsy.ovh/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.username,
                    password: this.state.password
                })
            })
            let result = await RES.json()
            if (result.success) {
                AsyncStorage.setItem('user',JSON.stringify(result.user))
                this.props.navigation.goBack()
            } else {
                alert(result.message)
            }
        } catch (error) {
            console.error(error)
        }
    }
    
    render() {    
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    placeholder="email"
                    returnKeyType="next" 
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCapitalize="none"
                    underlineColorAndroid='transparent'
                    onChangeText={ username => this.setState({username})}
                    value={this.state.username}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    secureTextEntry
                    placeholder="password"
                    returnKeyType="go"
                    ref={ input => this.passwordInput = input }
                    underlineColorAndroid='transparent'
                    value={this.state.password}
                    onChangeText={ password => this.setState({password})}
                />
               <TouchableOpacity style={styles.btnContainer} onPress={() => this.login()}>
                    <Text style={styles.btnText}>Se connecter </Text>
               </TouchableOpacity>  
            </View>
        )
    }
}