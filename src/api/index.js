import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    const modifiedData = { confirmed, recovered, deaths, lastUpdate };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

//Seção de API das notícias usando o New York Times.

let nytUrl =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=corona+virus&sort=newest&api-key=YYixc9rfwwSnyP5EQMbQJAAK6C8DpAt2";

export const getNYTNews = async () => {
  const response = await fetch(nytUrl);
  console.log("----------------------------");
  console.log("A request was just made to the New York Times API.");
  const data = await response.json();
  console.log("NewYorkTimes response: ", data);
  const news = await data.response.docs;
  console.log("NewYorkTimes news: ", news);
  const finalData = news.slice(0, 4);
  console.log("NYT final data:", finalData);
  console.log("----------------------------");
  return finalData;
};
