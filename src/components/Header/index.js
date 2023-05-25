import Hamburger from './Hamburger';
import Navbar from './Navbar';
// import './styles.scss';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    display: flex;
    margin-top: 24px;
    justify-content: space-between;

    @media(min-width: 1280px) {
        background-color: ${({theme}) => theme.colors.dark};
        align-items: center;
        margin: auto;
        height: 100px;
        position: sticky;
        top: 0;
        z-index: 6;
    }
`

const PortfolioStyle = styled.div`
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: ${({theme}) => theme.colors.white};

    @media(min-width: 1280px) {
        font-size: 26px;
    }
`

const HamburgerMenuStyle = styled.div`
    @media(min-width: 1280px) {
        display: none;
    }
`

const NavbarMenuStyle = styled.div`
    display: none;

    @media(min-width: 1280px) {
        display: block;
    }
`

export default function Header() {
    return (
        <HeaderStyle>
            <PortfolioStyle>
                Portfólio
            </PortfolioStyle>
            <HamburgerMenuStyle>
                <Hamburger />
            </HamburgerMenuStyle>
            <NavbarMenuStyle>
                <Navbar />
            </NavbarMenuStyle>
        </HeaderStyle>
    )
}