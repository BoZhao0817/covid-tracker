// functions to call apis
import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19/all';

// async function to fetch data: async await deal with promises in the same way that catch dose
export const fetchData = async () => {
  try {
    // const response = await axios.get(url);
    // return response;

    const {data: {cases, deaths, recovered}} = await axios.get(url);
  
    return {cases, deaths, recovered};
    
  } catch (error) {
    
  }
}

const url1 = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';
export const fetchDailyData = async () => {
  try {
    const {data} = await axios.get(url1);
    const date = Object.keys(data.cases).map((date) => date)
    const cases = Object.values(data.cases).map((cases) => cases)
    const deaths = Object.values(data.deaths).map((deaths) => deaths)
    const recovered = Object.values(data.recovered).map((recovered) => recovered)

    return {date, cases, deaths, recovered}

    // const modifiedData = data.map((dailyData) => ({
    //   cases: dailyData.cases,
    //   deaths: dailyData.deaths,
    //   recovered: dailyData.recovered,
    // })) //instant return

    // return modifiedData;    
  } catch (error) {
    
  }
}