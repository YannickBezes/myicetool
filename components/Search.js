import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import AutocompleteInput from './Autocomplete'

import styles from '../styles/components/Search.style'
import colors from '../styles/colors.style'

export default class Search extends React.Component{

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state= { cascade : '' }
        this.setCascade = this.setCascade.bind(this)
    }

    setCascade(cascade) {
        this.setState({cascade: cascade})
    }

    async detailsCascade() {
        try {
            const RES = await fetch(`https://myicetool.bsy.ovh/api/cascades/${this.state.cascade.id}/details`)
            cascade = await RES.json()
            this.props.navigation.navigate('Result', {status:2, cascade})
        } catch (error) {
            this.props.navigation.navigate('Result', {status: 3 })
        }
    }

    submit() {
        this.detailsCascade()
    }

    render(){
        return(
            <View style={styles.containerbis}>
                <View style={styles.autocompleteContainer}>
                    <View style={styles.containerBrand}>
                        <Image
                            source={require('./icons/logo_myicetool.png')}
                            style={styles.logo}
                        />
                        <Text style={styles.brand}>MyIceTool</Text>
                    </View>    
                    <AutocompleteInput updateState={ this.setCascade }/>
                
                    <TouchableOpacity style={styles.btnSearch} onPress={() => this.submit()}>
                        <Text style={styles.textBtn}>Rechercher</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}