import Router from 'next/router'
import { MainLayout } from '../components/mainLayout'
import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Section = styled.section`
    margin-top: -30px;
`;

const Input = styled.input`
    width: 50%;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #6ba07f;
    font-size: 14px;
`;

const Textarea = styled.textarea`
    width: 50%;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #6ba07f;
    font-size: 14px;
    font-family: 'Roboto'
`;

const NewPost: React.FC = () => {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const handleTitleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setTitle(e.currentTarget.value)
    }
    const handleBodyChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        setText(e.currentTarget.value)
    }

    const sendPost = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        axios.post('https://simple-blog-api.crew.red/posts',
                { title: `${title}`, 
                  body: `${text}` },
                {headers: {'content-type': 'application/json'}})
            .then(response => Router.push('/post/' + `${response.data.id}`))
    }

    return (
        <MainLayout title = {'Post'}> 
        <Section>
        <button onClick={() => Router.push('/')}>Go back to main page</button>
        <hr/>
       <div>
       <h1>Here you create own post</h1>
            <form onSubmit={sendPost}>
                <Input
                    type="text"
                    name="title"
                    maxLength={100}
                    onChange={handleTitleChange}
                    placeholder="Enter title here"
                    required
                />
                <br/>
                <Textarea
                    type="text"
                    name="body"
                    onChange={handleBodyChange}
                    placeholder="Enter text own post here"
                    rows={7}
                    required
                />
                <br/>
                <button >Create post</button>
            </form>
       </div>
        </Section>
       </MainLayout>
    )
  }

  export default NewPost