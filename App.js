import React from 'react';
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation';

import Result from './views/Result'
import Search from './views/Search';
import CommentaireForm from './views/CommentaireForm';
import Connexion from './views/Connexion';

import styles from './styles/app.style'

const StackNav = StackNavigator({
	Search: { screen: Search },
	Connexion: { screen: Connexion },
	Commentaire: { screen: CommentaireForm },
	Result: { screen: Result },
}, {
	headerMode: 'screen'
})

export default class App extends React.Component{
  	render() {
	    return(
			<View style={styles.container}>
				<StackNav />
			</View>
    	)
  	}
}