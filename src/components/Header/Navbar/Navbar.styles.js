import styled from 'styled-components';

export const NavbarStyled = styled.ul`
    display: flex;
    width: 450px;
    justify-content: space-between;

    & li a {
        text-decoration: none;
        color: ${({theme}) => theme.colors.white};
        transition: all 100ms;
        cursor: pointer;
    }

    & li a:hover {
        color: ${({theme}) => theme.colors.greenLight};
        transition: all 100ms;
    }
`