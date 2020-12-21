import React, { Component } from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup'
import cx from 'classnames';

class Cards extends Component {
    
    render() { 
        const { data: {confirmed, deaths, recovered, lastUpdate} } = this.props
        const data = {confirmed, deaths, recovered, lastUpdate}
        if (!data.confirmed){
            return 'Loading...'
        }

        return (
            <div className={styles.container}>
                <Grid container spacing={3} justify='center'>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>Infectados</Typography>
                            <Typography variant='h5'>
                                <CountUp start={0} end={data.confirmed.value} duration={2.5} separator='.' />
                            </Typography>
                            <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>Número de casos registrados de COVID-19.</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>Recuperados</Typography>
                            <Typography variant='h5'>
                            <CountUp start={0} end={data.recovered.value} duration={2.5} separator='.' />    
                            </Typography>
                            <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>Numero de recuperações do COVID-19 registradas até agora.</Typography>
                        </CardContent>
                    </Grid>
                    
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>Óbitos</Typography>
                            <Typography variant='h5'>
                                <CountUp start={0} end={data.deaths.value} duration={2.5} separator='.' />    
                            </Typography>
                            <Typography color='textSecondary'>{new Date(data.lastUpdate).toDateString()}</Typography>
                            <Typography variant='body2'>Número total de fatalidades pelo vírus até o momento.</Typography>
                        </CardContent>
                    </Grid>
                    
                </Grid>
            </div>
            
        )
    }
}
 
export default Cards;