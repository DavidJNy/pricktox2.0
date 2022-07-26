import { React } from 'react'
import { Link } from "react-router-dom";
import { NavibarContainer, NavbarLink} from './style/NavBarStyles';
import { FaReact, FaPhone } from 'react-icons/fa';
import ChiliLogo2 from './images/chililogo2.png'
import Contact from './Contact';
import FrontPage from './FrontPage';
import Projects from './widgets/Projects';
import About from './About';


function NavigationBar() {

    return (
        <NavibarContainer>
            <NavbarLink to="/" element={<FrontPage/>}>
                <img src={ChiliLogo2} alt="" />
                <header>PrickTox</header>
            </NavbarLink>
            <ul>
                <NavbarLink to="/About" element={<About />}>About</NavbarLink>
                <NavbarLink to="/Projects" element={<Projects />}><FaReact/>Projects</NavbarLink>
                <NavbarLink to="/Contact" element={<Contact/>}><FaPhone/>Contact</NavbarLink>
            </ul>
        </NavibarContainer>

    );
}

export default NavigationBar;