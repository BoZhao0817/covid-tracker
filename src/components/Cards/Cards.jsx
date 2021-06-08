import React from 'react';
import {Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

// destruct data because in 'App.js' we only pass data not the following values
const Cards = ({data:{cases, deaths, recovered}}) => {
  //if we don't check data, we may get undefined if the data is not yet fetched
  if (!cases){
    return 'Loading...'
  }
 
  return(
      <div className={styles.container}>
        {/* Grid: a kind of container that wrap the cards */}
        <Grid container spacing ={3} justify ="center">

          <Grid item component ={Card} xs ={12} md ={3} className={cx(styles.cards, styles.cases)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom> Infected</Typography>
              <Typography variant='h5'>
                <CountUp start ={0} end={cases} duration={2.5} separator=","/>
              </Typography>
              <Typography variant='body2'>Number of active cases of covid-19</Typography>
            </CardContent>
          </Grid>

          <Grid item component ={Card} xs ={12} md ={3} className={cx(styles.cards, styles.recovered)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom> Recovered</Typography>
              <Typography variant='h5'>
                <CountUp start ={0} end={recovered} duration={2.5} separator=","/>
              </Typography>
              <Typography variant='body2'>Number of recoveries from covid-19</Typography>
            </CardContent>
          </Grid>

          <Grid item component ={Card} xs ={12} md ={3} className={cx(styles.cards, styles.deaths)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom> Deaths</Typography>
              <Typography variant='h5'>
                <CountUp start ={0} end={deaths} duration={2.5} separator=","/>
              </Typography>
              <Typography variant='body2'>Number of deaths caused by covid-19</Typography>
            </CardContent>
          </Grid>

      
        </Grid>
      </div>


    
    
  )
}

export default Cards;