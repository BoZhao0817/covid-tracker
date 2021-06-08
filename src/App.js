import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api'; // directly go to the index file, if not have index file, need to add the full path?

class App extends React.Component {
  // save state
  state = {
    data:{},
  }

  // make request
  async componentDidMount() {
    const fetchedData = await fetchData(); // return the response
    this.setState({data: fetchedData})
  }
  render(){
    const {data} = this.state
    // can be removed if <Cards data ={this.state,data}/>
    return(
      <div className={styles.container}>
        <Cards data={data}/>   
        <CountryPicker/>
        <Chart/>
      </div>  
    )
  }

}

export default App;