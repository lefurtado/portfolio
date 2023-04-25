import styled from 'styled-components';

export const NavbarStyled = styled.ul`
    display: flex;
    width: 450px;
    justify-content: space-between;

    & li a {
        text-decoration: none;
        color: #fff;
        transition: all 100ms;
        cursor: pointer;
    }

    & li a:hover {
        color: #00DF5E;
        transition: all 100ms;
    }
`