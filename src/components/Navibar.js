import React from 'react'
import ChiliLogo2 from './images/chililogo2.png'
import { FaReact, FaPhone, FaBitcoin } from 'react-icons/fa';

function NavigationBar() {


    return (
        <div>
            <img src={ChiliLogo2} alt="" />
            <header>PrickTox</header>
        </div>

    );
}

export default NavigationBar;