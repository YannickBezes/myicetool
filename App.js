import React from 'react';
import { View, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation';

import Profile from './components/Profile';
import Search from './components/Search';
import Connexion from './components/Connexion';
import Result from './components/Result'

import styles from './styles/app.style'


const StackNav = StackNavigator({
	Search: { screen: Search },
	Connexion: { screen: Connexion },
	Profile: { screen: Profile },
	Result: { screen: Result },
}, {
	headerMode: 'screen'
})

export default class App extends React.Component{
  	render() {
	    return(
			<View style={styles.container}>
				<StatusBar hidden={false}/>
				<StackNav />
			</View>
    	)
  	}
}