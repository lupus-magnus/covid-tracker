import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changeableUrl = url;
    if (country){
        changeableUrl = `${url}/countries/${country}`
    }
    try{
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl)
        const modifiedData = {confirmed, recovered, deaths, lastUpdate}
        
        return (modifiedData)
    } catch (error) {
        console.log(error)
    }
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData
    } catch(error){
        console.log(error)
    }
}

export const fetchCountries = async () => {
    try {
        const {data: { countries }} = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name)
    } catch(error){
        console.log(error)
    }
}

//Seção de api das notícias.
let keyGmail = '3234e3e9c25e458dae03ccec0b3d134a'
let keyPoli = '9431beab82af4055b6fd0c27dd9b3d74'
let keyList = [keyGmail,keyPoli]
let urlNews = 'http://newsapi.org/v2/top-headlines?country=br&q=corona&from=2020-12-18&sortBy=popularity&apiKey=' + keyList[Math.floor(Math.random()*keyList.length)] +'&language=pt';

export const getNews = async () => {
    const response = await fetch(urlNews)
    console.log('A request was just made to the News Api.')
    const data = await response.json()
    console.log('response: ', data)
    const modifiedData = data.articles.slice(0,4)
    console.log('data:', data)
    console.log ('modifiedData: ', modifiedData)
    return (modifiedData)
}