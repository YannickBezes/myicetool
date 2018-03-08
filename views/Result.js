import React, { Component} from 'react';
import { View, Dimensions, ActivityIndicator, ScrollView, Text, Button } from 'react-native'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import Commentaire from '../components/Commentaire'
import Descriptif from '../components/Descriptif'

import styles from '../styles/components/Result.style'

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
        this.setState({cascade})
      }

    get commentaires() {
        const { commentaires } = this.state.cascade
        const items = commentaires && commentaires.length ?
            commentaires.map((commentaire, index) => {
                return <Commentaire key={`commentaire=${index}`} {...commentaire}/>
            }) : false
        return (
            <View>
                <Button
                    style={styles.btnAvis}
                    onPress={() => this.redirection()}
                    title="Ecris un commentaire sur cette cascade "
                />
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

    _renderHeader = props => <TabBar style={styles.tabBar} {...props} />

    _renderScene =  SceneMap({
        details: () => this.contentDetails,
        commentaires: () => this.contentCommentaires,
    })

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
                <Text style={styles.label}>La cascade recherché n'existe pas ! </Text>
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