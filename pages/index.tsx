import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme';
import styles from '../styles/Home.module.css'

const Title = styled.div`
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
`;

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Title>
        <h1 className='hi'>HI</h1>
      </Title>
      {/* css 변수 사용법 */}
      <style jsx>{`
        .hi {
          margin-left: var(--margin-left);
          font-family: MonumentExtended, sans-serif;
        }
      `}</style>
    </ThemeProvider>
  )
}

export default Home
