
import { useEffect, useState } from 'react'
import Editor from '../../components/editor'
import Title from './title'
import {  useNavigate } from 'react-router-dom'
import Alert from '../../utils/alert'

const Create = () => {
    const [editorValue, setEditorValue] = useState('')
    const [title, setTitle] = useState('')
    const [isPublish,setIsPublish] = useState(false)
    const navigate = useNavigate()
    const [isBtnDisabled,setIsBtnDisabled] = useState(true)
    useEffect(()=>{
        if(title && editorValue){
            setIsBtnDisabled(false)
        }
        else{
            setIsBtnDisabled(true)
        }
    },[editorValue,title])
    const handleClick = () => {
        const blog = {
            id: Math.floor(Math.random() * 1000),
            title: title,
            content: editorValue,
            published_at: new Date().toLocaleDateString()
        }
        let blogs = localStorage.getItem('blogs')
        if (blogs) {
            blogs = JSON.parse(blogs)
            
        }
        else {
            blogs = []
        }

        blogs.push(blog)
        localStorage.setItem('blogs', JSON.stringify(blogs))
        setEditorValue('')
        setTitle('')
        setIsPublish(true)

        setTimeout(() => {
            setIsPublish(false)
            navigate('/')
        },1500)
    }
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-28 pb-5 '>
            <h1 className='text-2xl font-sans  font-bold text-[var(--primary-color)] my-2'>
                Create Blog
            </h1>
            {
                isPublish && <Alert/>
            }
            <div className='w-full flex items-center justify-center '>
                <div className='w-full lg:w-1/2 flex flex-col gap-4 shadow-2xl p-3  rounded-lg '>
                    <Title title={title} setTitle={setTitle} />
                    <Editor value={editorValue} setValue={setEditorValue} readOnly={false} />
                    <button className='flex items-center gap-2 w-fit p-1 self-end px-5 rounded-full border-2  font-bold text-lg bg-[var(--primary-color)] text-white transition-colors duration-300 disabled:bg-white disabled:text-slate-400 disabled:cursor-not-allowed' disabled={isBtnDisabled} onClick={handleClick}>
                        Publish
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Create