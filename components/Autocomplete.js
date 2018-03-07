import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Keyboard } from 'react-native'
import Autocomplete from 'react-native-autocomplete-input'

export default class AutocompleteInput extends Component {

	constructor(props) {
		super(props)
		this.state = { cascades: [], nom: '' }
	}

	async getCascades(query) {
		if(query.length >= 3) {
			let res = await fetch(`https://myicetool.bsy.ovh/api/cascades/name`, {
				method: 'post',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({name: query})
			})
			let cascades = await res.json()
			this.setState({ cascades })	
		} else {
			this.setState({ cascades: [] })
		}
		this.props.updateState(query)
	}

	_onClick(cascade) {
		Keyboard.dismiss()
		this.setState({ nom: cascade.nom, cascades: [] })
		this.props.updateState(cascade)
	}

    render() {
		const { nom, cascades } = this.state
		
		return (
			<Autocomplete
        		onChangeText={nom => this.getCascades(nom)}
				defaultValue={nom}
		  		data={cascades}
				underlineColorAndroid='transparent'
          		renderItem={cascade => 
            		<TouchableOpacity onPress={() => this._onClick(cascade)}>
              			<Text>{cascade.nom}</Text>
            		</TouchableOpacity>
          		}
			/>
		)
    }
}