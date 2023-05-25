import Hamburger from './Hamburger';
import Navbar from './Navbar';
// import './styles.scss';
import styled from 'styled-components';

const HeaderContainerStyle = styled.div`
    display: flex;
    justify-content: space-between;

    @media(min-width: 1280px) {
        height: 100px;
        position: sticky;
        top: 0;
        z-index: 6;
        background-color: ${({ theme }) => theme.colors.dark};
    }
`

const HeaderStyle = styled.div`
    display: flex;
    margin: 24px auto;
    width: 90%;
    justify-content: space-between;

    @media(min-width: 1280px) {
        width: 1110px;
        margin: auto;
    }
`

const PortfolioStyle = styled.div`
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};

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
        <HeaderContainerStyle>
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
        </HeaderContainerStyle>
    )
}