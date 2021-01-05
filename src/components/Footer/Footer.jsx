import React, { Component } from 'react';
import styles from './Footer.module.css'
import nytLogo from '../../images/nyt_logo.png'

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className={styles.footer}>
                <img src='https://developer.nytimes.com/files/poweredby_nytimes_200b.png?v=1583354208360'></img>
                <p>&copy; Lupus Magnus, 2020. </p>
                
            </div>
        );
    }
}
 
export default Footer;
