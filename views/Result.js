import React, { Component} from 'react';
import { View, Dimensions, ActivityIndicator, ScrollView, Text, Button, TouchableOpacity } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import Commentaire from '../components/Commentaire'
import Descriptif from '../components/Descriptif'

import styles from '../styles/views/Result.style'

export default class Result extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            status: this.props.navigation.state.params.status,
            cascade: this.props.navigation.state.params.cascade,
            index: 0,
            routes: [
                { key: 'details', title: 'Informations' },
                { key: 'commentaires', title: 'Commentaires' },
            ],
        }
    }

    _handleButtonClick(commentaire) {
        let { cascade } = this.state
        cascade.commentaires.push(commentaire)
        this.setState({ cascade })
    }

    get commentaires() {
        const { commentaires } = this.state.cascade
        const items = commentaires && commentaires.length ?
            commentaires.map((commentaire, index) => {
                return <Commentaire key={`commentaire=${index}`} {...commentaire}/>
            }) : false
        return (
            <View style={styles.containerComments}>
                <TouchableOpacity
                    style={styles.btnComments}
                    onPress={() => this.redirection()}
                    
                >
                    <Text style={styles.btnCommentsText}>Laisser un commentaire</Text>
                </TouchableOpacity>

                <ScrollView>
                    { items }
                </ScrollView>
            </View>
        )
    }

    redirection() {
        this.props.navigation.navigate('Commentaire', {cascade : this.state.cascade, _handleButtonClick: this._handleButtonClick.bind(this) })
    }

    get details() {
        let { cascade } = this.state
        return <Descriptif { ...cascade }/>
    }

    _handleIndexChange = index => this.setState({ index })

    _renderHeader = props => <TabBar style={styles.tabBar} labelStyle={styles.tabBarLabel} indicatorStyle={styles.tabBarIndicator} {...props} />

    _renderScene = ({ route }) => {
        switch (route.key) {
            case 'details':
                return this.contentDetails;
            case 'commentaires':
                return this.contentCommentaires;
            default:
                return null;
        }
    }

    get contentDetails() {
        switch (this.state.status) {
            case 1:
                return this.loading
            case 2:
                return this.details
            case 3:
                return this.error
        }
    }

    get contentCommentaires() {
        switch (this.state.status) {
            case 1:
                return this.loading
            case 2:
                return this.commentaires
            case 3:
                return this.error
        }
    }

    get loading() {
        return (
            <View style={styles.labelContainer}>
                <ActivityIndicator size={'large'} />
            </View>
        )   
    }

    get error() {
        return (
            <View style={styles.labelContainer}>
                <Text style={styles.label}>La cascade recherchée n'existe pas ! </Text>
            </View>
        )
    }

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    )
  }
}