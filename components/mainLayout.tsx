import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

const Navigation = styled.nav`
    position: fixed;
    height: 60px;
    left: 0;
    top: 0;
    right: 0;
    background: #6ba07f;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Section = styled.section`
    margin-top: 70px;
    margin-left: 20px;
`;

const A = styled.a`
    color: #fff;
    text-decoration: none;
    cursor: pointer;
`;

interface IMainLayoutProps {
    children: JSX.Element[],
    title: string
}

export const MainLayout: React.FC<IMainLayoutProps> = ({ children, title = 'My-Test' }) => {
    return (
        <>
            <Head>
                <title>{title} | My-Test</title>
                <meta name="description" content="Run test task for job" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation>
                <Link href={'/posts'}><A>Page Posts</A></Link>
                <Link href={'/new'}><A>New Post</A></Link>

            </Navigation>
            <Section>
                {children}
            </Section>
        </>
    )
}


