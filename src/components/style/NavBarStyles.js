import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavibarContainer = styled.nav `
display: grid-column;
width: 100%;
background-color: red;
overflow: hidden;
`

export const NavbarLink = styled(Link) `
display: flex;

color:white;
font-size: large;
height: 50px;

&:hover,
&:focus {
    color: blue;
}

&:active {
    color: red;
}

`
