import {useState, useEffect} from 'react'
import { MainLayout } from '../components/mainLayout'
import Router from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import {MyPost} from '../interface/post'
import { GetServerSideProps } from 'next'
import styled from 'styled-components'

const WrapperUL = styled.ul`
    list-style-type: none;
`;

const WrapperLI = styled.li`
    margin-bottom: 5px;
`;

const A = styled.a`
    border: 1px solid #6ba07f;
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
    padding-left: 5px;
    padding-right: 5px;
`;

const Section = styled.section`
    margin-top: -30px;
`;

interface IPostsPageProps {
    posts: MyPost
}

export default function Posts( {posts: serverPosts}: IPostsPageProps ) {

    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load() {
            const response = await axios.get('https://simple-blog-api.crew.red/posts')
            const data = response.data;
            setPosts(data)
        }
        if (!serverPosts) {
            load()
        }
    }, [])

    return (
        <MainLayout title = {'Posts'}>
            <Section>
            <button onClick={() => Router.push('/')}>Go back to main page</button>
            <hr/>
                <WrapperUL>
            {posts.map(post => (
                <WrapperLI key={post.id}>
                    <Link href={`/post/[id]`} as={`/post/${post.id}`}><A>{post.title}</A></Link>
                </WrapperLI>
            ))}
        </WrapperUL>
            </Section>
    </MainLayout>
    )
  }

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await axios.get('https://simple-blog-api.crew.red/posts')
    const posts: MyPost = response.data;
    return { props: {posts} };
}
