import React, { Component } from 'react';

import { ScrollView, View, Text, RefreshControl } from 'react-native';
import { GamesApi } from '../../../constants/api';
import styles from './styles/HomeScreen';

const gamesApi = new GamesApi();

class HomeScreen extends Component {
    static defaultProps = {
        gamesApi
    }
    state = {
        loading: false,
        games: []
    }

    async componentDidMount() {
        this.setState({ loading: true })
        const games = await this.props.gamesApi.fetchGames();
        this.setState({
            loading: false,
            games
        })
        console.log(this.state.games)
    }
    async _onRefresh() {
        this.setState({ loading: true })
        const games = await this.props.gamesApi.fetchGames();
        this.setState({
            loading: false,
            games
        })
    }

    _periodNumber(period) {
        if (period == 1)
            return '1st'
        if (period == 2)
            return '2nd'
        if(period == 3)
            return '3rd'
        else
            return '-'
    }
    renderGames() {
        return this.state.games.map((game, i) => {
            const awayTeam = game["teams"]["away"]["team"].abbreviation
            const awayTeamScore = game["teams"]["away"].score

            const homeTeam = game["teams"]["home"]["team"].abbreviation
            const homeTeamScore = game["teams"]["home"].score

            const time = game["linescore"]["currentPeriodTimeRemaining"];
            const period = game["linescore"]["currentPeriod"];
            return (
                <View key={i} style={styles.card}>
                    <View style={styles.teamContainer}>
                        <Text style={styles.cardText}>{homeTeam}</Text>
                    </View>
                    <View style={styles.stats}>
                        <Text style={styles.statsText}>{homeTeamScore}:{awayTeamScore}</Text>
                        <Text style={styles.statsText}>
                            {this._periodNumber(period)}
                        </Text>
                        <Text style={styles.statsText}>{time}</Text>
                    </View>
                    <View style={styles.teamContainer}>
                        <Text style={styles.cardText}>{awayTeam}</Text>
                    </View>
                </View>
            )
        })
    }
    render() {
        return (
            <View style={styles.root}>
                <ScrollView style={styles.scrollview} refreshControl={
                    <RefreshControl refreshing={this.state.loading} onRefresh={this._onRefresh.bind(this)} />
                }>
                    {this.renderGames()}
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;