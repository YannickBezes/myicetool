import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import styles from '../styles/components/Descriptif.style'

export default class Descriptif extends Component {

    constructor(props) {
        super(props)
    }

    get constituants() {
        const { constituants } = this.props
        const items = constituants && constituants.length ?
            constituants.map((c, index) => {
                return <Text style={[styles.textColor, styles.list]} key={`constituant=${index}`}>- {c.libelle}</Text>
            }) : false
        return (
            <View>
                <Text style={[styles.strong, styles.textColor]}>Constituants : </Text>
                {items}
            </View>
        )
    }

    get supports() {
        const { supports } = this.props
        const items = supports && supports.length ?
            supports.map((s, index) => {
                return <Text style={[styles.textColor, styles.list]} key={`support=${index}`}>- {s.libelle}</Text>
            }) : false
        return (
            <View style={{paddingBottom: 10}}>
                <Text style={[styles.strong, styles.textColor]}>Supports : </Text>
                {items}
            </View>
        )
    }

    render() {
        let { nom, nombre_voies, altitude_minimum, hauteur, niveau_engagement, lng, lat, type_fin_vie, type_glace, structure, orientation, niveau } = this.props
        return(
            <ScrollView style={styles.content}>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Nom cascade : </Text><Text style={styles.textColor}>{nom}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Nombre de voies : </Text><Text style={styles.textColor}>{nombre_voies}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Altitude Minimum : </Text>
                    <Text style={styles.textColor}>{altitude_minimum}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Hauteur : </Text>
                    <Text style={styles.textColor}>{hauteur}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Niveau d'engagement : </Text>
                    <Text style={styles.textColor}>{niveau_engagement}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Latitude : </Text>
                    <Text style={styles.textColor}>{lat}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Longitude : </Text>
                    <Text style={styles.textColor}>{lng}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Type de fin de vie : </Text>
                    <Text style={styles.textColor}>{type_fin_vie.libelle}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Type de glace : </Text>
                    <Text style={styles.textColor}>{type_glace.libelle}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Structure : </Text>
                    <Text style={styles.textColor}>{structure.libelle}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Orientation : </Text>
                    <Text style={styles.textColor}>{orientation.libelle}</Text>
                </View>
                <View style={styles.containerText}>
                    <Text style={[styles.strong, styles.textColor]}>Niveau de difficulté : </Text>
                    <Text style={styles.textColor}>{niveau.libelle}</Text>
                </View>
                {this.constituants}
                {this.supports}
            </ScrollView>
        );
    }
}
