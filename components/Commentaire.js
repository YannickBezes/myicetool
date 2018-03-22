import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles/components/Commentaire.style'

export default class Commentaire extends Component {

    constructor(props) {
        super(props)
        this.state = { username: '', photos: []}
    }

    componentDidMount() {
        this.user()
        this.photos()
    }

    async user() {
        const RES = await fetch(`https://myicetool.bsy.ovh/api/commentaires/${this.props.id}/user`)
        let user = await RES.json()
        this.setState({ username: user.nom })
    }

    async photos() {
        const RES = await fetch(`https://myicetool.bsy.ovh/api/commentaires/${this.props.id}/photos`)
        let photos = await RES.json()
        this.setState({ photos })
    }


    get listcom() {
        const { libelle , date, photos } = this.props
        let { username } = this.state
        if(photos.length > 0) {
            return(
                <View style={styles.comments}>
                    <View style={styles.containerUserDate}>
                        <Text style={styles.username}>@{ username }</Text>
                        <Text style={styles.commentaireDate}>{date}</Text>
                    </View>
                    <Text style={styles.libelle}>{libelle}</Text>
                    <Image
                            source={{uri: photos[0].url}}
                            style={styles.image}
                        />
                </View>
            )
        } else {
            return(
                <View style={styles.comments}>
                    <View style={styles.containerUserDate}>
                        <Text style={styles.username}>@{ username }</Text>
                        <Text style={styles.commentaireDate}>{date}</Text>
                    </View>
                    <Text style={styles.libelle}>{libelle}</Text>
                </View>
            )
        }
    }

    render() {
        return(
            <View style={styles.commentaireContainer}>
                <View style={styles.avatarContainer}>
                <Image
                        source={require('./icons/user.png')}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.contentContainer}>
                    {this.listcom}
                </View>
            </View>
        ) 
    }
}