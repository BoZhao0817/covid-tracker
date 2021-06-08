import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {

  const [dailyData, setDailyData] = useState({}); // initial value
  useEffect(() => {
    const fetchAPI = async () =>{
      setDailyData(await fetchDailyData()); // return a promise
    }
    console.log(dailyData.date);
    console.log(dailyData.cases);
    console.log(dailyData.deaths);
  
    fetchAPI();

  },[]);

  const lineChart = (
    // check
  
    <Line
      data={{
        // make it object, loop through the daily data
        labels: 'Date', // map => array
        datasets: [{
          data: dailyData.date,
          label: 'Cases',
          borderColor: '#3333ff',
          fill: true,
        },
        {
          data: dailyData.deaths,
          label: 'Deaths',
          borderColor: 'red',
          backgroundColor: 'rgba(255,0,0,0.5)',
          fill: true,
        },
        {
          data: dailyData.recovered,
          label: 'Recoveries',
          borderColor: 'green',
          backgroundColor: 'rgba(0,255,0,0.5)',
          fill: true,
        }],
      }}
    />
  );

  return(
    <div>
      <h1>Chart</h1>
    </div>
  )
}

export default Chart;