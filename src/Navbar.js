import React from 'react';
import styled from 'styled-components';


const Nav = styled.ul`
list-style: none;
display: flex;
justify-content: right;
margin: 20px 50px;
z-index: 15;
li{
    padding: 18px 30px;
}

@media (max-width: 768px) {
    margin: 0;
    flex-direction: column;
    background-color: #1565df;
    position: fixed;
    transition: all 0.3s linear;
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    li{
        color: #fff;
    }

}

`



const Navbar = ({open}) => {
    return (
        <Nav open={open}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Github</li>
        </Nav>
    );
};

export default Navbar;