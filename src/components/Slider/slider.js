import React, { Component } from 'react';
import { getNYTNews } from '../../api/index'
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
            this.setState({news: await getNYTNews()})
            //console.log('We successfully made a request. -Logged from componentDidMount')
        }
        fetchAPI()
        //console.log('End of componentDidMount!')
        //console.log('----------------')

        window.setInterval(() => this.updateActive(), 7500)
    }

    render() {
        let {news, active} = this.state;
        let currentNew = news[active%news.length]
        //let main = currentNew.headline.main
        //let print_hline = currentNew.headline.print_head

        if(news.length > 2){
            return (
                <div className={styles.slidecontainer}>
                    <a rel="noreferrer" target="_blank" href={currentNew.web_url}>
                        <div id='slider'>
                            <img className={styles.slidephoto} alt='Imagem ilustrativa da notícia.'
                                src={('https://www.nytimes.com/' + currentNew.multimedia[9].url) || genericImage}
                                name='slide' 
                            />
                            <p className={styles.newsText}>{currentNew.headline.main}</p>
                            
                        
                        </div>
                    </a>
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