import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/components/Commentaire.style'

export default class Commentaire extends Component {

    constructor(props) {
        super(props)
        this.state = { username: ''}
    }

    componentDidMount() {
        this.user()
    }

    async user() {
        const RES = await fetch(`https://myicetool.bsy.ovh/api/commentaires/${this.props.id}/user`)
        let user = await RES.json()
        this.setState({ username: user.nom })
    }

    get listcom() {
        const { libelle , date } = this.props
        let { username } = this.state
        return(
            <View style={styles.usernameContainer}>
                <Text style={styles.username}>@{ username }</Text>
                <Text style={styles.commentaireDate}>{date}</Text>
                <Text style={styles.libelle}>{libelle}</Text>
            </View>
        )
    }

    render() {
        return(
            <View style={styles.commentaireContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={require('./icons/moutain.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.contentContainer}>
                    {this.listcom}
                </View>
            </View>
        )
    }
}