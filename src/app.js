import React, { Component } from 'react';

import { Cards, Chart, CountryPicker, Footer, Slider} from './components';
import styles from './App.module.css'
import { fetchData } from './api'
import covidImg from './images/covid.png';

class App extends Component {
    
    state = {
        data: {},
        country: '',
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})
    }

    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
        
    }
    
    render() { 
        const { data, country } = this.state;
        return (
            <div className={styles.container} >
                <img className={styles.image} alt='covid art logo' src={covidImg}/>
                <Slider />
                <Cards data = {data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
                <Footer />
            </div>
          );
    }
}
 
export default App;