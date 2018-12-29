import React from 'react'
import { Nav } from '../../theme';
import styled from 'styled-components';

const Span = styled.h1`
    margin: auto;
    line-height: 2;
    font-size: 20px;
    color: #f4eade;
`;

const Navbar = ()=> {
    return(
        <Nav>
            <Span>Lyrics Match</Span>
        </Nav>
    )
}

export { Navbar };



