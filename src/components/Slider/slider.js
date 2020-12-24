import React, { Component } from 'react';
import { getNews } from '../../api/index'
import styles from '../Slider/slider.module.css'
import genericImage from '../../../src/images/newspaper.jpg'

export class Carousel extends Component {
    constructor(props) {
        console.log('Constructor log.')
        super(props)
    
        this.state = {
            news: {},
            active: 0,
        }
    }

    updateActive() {
        this.setState({active: this.state.active + 1})
    }

    componentDidMount() {
        console.log('Component did mount block!')
        const fetchAPI = async () => {
            this.setState({news: await getNews()})
            console.log('We successfully made a request. -Logged from componentDidMount')
        }
        fetchAPI()
        console.log('End of componentDidMount!')
        console.log('----------------')

        window.setInterval(() => this.updateActive(), 5000)
    }

    render() {
        let {news, active} = this.state;
        //console.log(this.state.news[this.state.active%this.state.news.length].urlToImage.startsWith('https') ? this.state.news[this.state.active%this.state.news.length].urlToImage : genericImage)
        
        if(news.length > 2){
            return (
                <div className={styles.slidecontainer}>
                    <div id='slider'>
                        <img className={styles.slidephoto} alt='foto da noticia'
                            src={news[active%news.length].urlToImage.startsWith('https') ? news[active%news.length].urlToImage : genericImage}
                            name='slide' 
                        />
                        <a rel="noreferrer" target="_blank" href={news[active%news.length].url}><p className={styles.newsText}>{news[active%(news.length)].title}</p></a>
                        
                    
                    </div>
                </div>
            );
        } else {
            return (
                <div className={styles.slidecontainer}>
                    <div id='slider'>
                        <img className={styles.slidephoto} alt='foto da noticia'
                            src='https://www.nbn.org.il/wp-content/uploads/2014/11/scientificresearch_29824805_cropped.jpg'
                            name='slide'
                            rel="noreferrer" 
                        />
                        <p className={styles.newsText}>Não há novas notícias nesse momento.</p>
                    </div>
                </div>
            )
        }
    }

}
 
export default Carousel;