import Router from 'next/router'
import { MainLayout } from '../components/mainLayout'
import styled from 'styled-components'

const Error = styled.h1`
    margin-top: 70px;
    color: red;
`;

export default function ErrorPage() {
    return (
        <MainLayout title = {'404'}>
            <Error>Error 404</Error>
            <button onClick={() => Router.push('/')}>Go back to main</button>

        </MainLayout>
    )
  }