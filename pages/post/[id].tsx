import {useState, useEffect} from 'react'
import axios from 'axios'
import Router, {useRouter} from 'next/router'
import {NextPageContext} from 'next'
import {MyPost} from '../../interface/post'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: 30px;
`;

const Button = styled.button`
    margin-right: 15px;
`;

const Content = styled.div`
    text-align: center;
`;

interface IPostPageProps {
    post: MyPost
}

const Post: React.FC<IPostPageProps> = ({post: serverPost}) => {

    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await axios.get(`https://simple-blog-api.crew.red/posts/${router.query.id}`)
            const data = response.data;
            setPost(data)
        }
        if (!serverPost) {
            load()
        }
    }, [])

    const deletePost = () => {
        axios.delete('https://simple-blog-api.crew.red/posts/' + `${post.id}`)
            .then(() => Router.push('/'))
    }

    return <>
      <Wrapper> 
       <Content>
       Your title: <h1>{post.title}</h1>
       <hr />
       Content post: <h2>{post.body}</h2>
       </Content>
       <Button onClick={() => Router.push('/posts')}>Go back to all posts</Button>
       <Button onClick={deletePost}>Delete post</Button>
      </Wrapper>
    </>
  }

interface PostsNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

export const getServerSideProps = async ({query}: PostsNextPageContext) => {
    const response = await axios.get(`https://simple-blog-api.crew.red/posts/${query.id}`)
    const post: MyPost = response.data;
    return { props: {post} };
}

export default Post