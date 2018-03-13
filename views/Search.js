import React from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'

import AutocompleteInput from '../components/Autocomplete'

import styles from '../styles/views/Search.style'
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
            <ImageBackground 
            source={require('./theme.jpg')}
            style={styles.containerbis}>
                 <View style={styles.container}>
                    <View style={styles.containerBrand}>
                        <Text style={styles.brand}>MyIceTool</Text>
                    </View>    
                    <AutocompleteInput updateState={ this.setCascade }/>
                
                    <TouchableOpacity style={styles.btnSearch} onPress={() => this.submit()}>
                        <Text style={styles.textBtn}>Rechercher</Text>
                    </TouchableOpacity>
                </View> 
            </ImageBackground>
        );
    }
}