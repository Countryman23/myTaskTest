import styled from 'styled-components'
import { AppProps } from 'next/app'
import '../styles/globals.css'

const Wrapper = styled.div`
    background-color: #e9e9e9;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Wrapper>
            <Component {...pageProps} />
        </Wrapper>
    )
  }

export default MyApp