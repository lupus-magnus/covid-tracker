import React, { Component } from 'react';
import styles from './Footer.module.css'

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className={styles.footer}>
                <img alt='New York Times Attribution' src='https://developer.nytimes.com/files/poweredby_nytimes_200b.png?v=1583354208360'></img>
                <p>&copy; Lupus Magnus, 2020. </p>
                
            </div>
        );
    }
}
 
export default Footer;
