import styled from "styled-components";

export const PageContainerStyle = styled.div`
    margin: 0 20px;
    @media(min-width: 1280px) {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }

        &::-webkit-scrollbar-track {
            background-color: ${({theme}) => theme.colors.gray400};
        }

        &::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.colors.white};
            width: 0.5rem;
            background-clip: content-box;
        }
            max-width: 1110px;
            margin: auto;
        }
`

export const ContactStyle = styled.div`
    margin-top: 56px;
    @media(min-width: 1280px) {
        margin-top: 100px;
    }
`