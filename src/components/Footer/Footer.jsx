import React, { Component } from 'react';
import styles from './Footer.module.css'
//import lupus_logo from '../../images/lupus128px.png'

class Footer extends Component {
    state = {  }
    render() { 
        return (
            <div className={styles.footer}>
                <p>&copy; Lupus Magnus, 2020. </p>
                
            </div>
        );
    }
}
 
export default Footer;
