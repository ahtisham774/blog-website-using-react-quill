
import { useEffect, useState } from 'react'
import logo from '../../assets/logo-scondary.svg'
import Editor from '../../components/editor'
import Title from './title'
import { NavLink, useNavigate } from 'react-router-dom'
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
        <div className='flex flex-col justify-center items-center gap-3 pb-5 '>
            <div className='w-60'>
                <img src={logo} className='w-ful h-auto object-cover ' alt="" />
            </div>
            <h1 className='text-xl font-bold text-[var(--primary-color)] my-2'>
                Create Blog
            </h1>
            {
                isPublish && <Alert/>
            }
            <div className='w-full flex items-center justify-center '>
                <div className='w-full md:w-1/2 flex flex-col gap-4 shadow-2xl p-3  rounded-lg '>
                    <Title title={title} setTitle={setTitle} />
                    <Editor value={editorValue} setValue={setEditorValue} />
                    <button className='flex items-center gap-2 w-fit p-1 self-end px-5 rounded-full border-2  font-bold text-lg bg-[var(--primary-color)] text-white transition-colors duration-300 disabled:bg-white disabled:text-slate-400 disabled:cursor-not-allowed' disabled={isBtnDisabled} onClick={handleClick}>
                        Publish
                    </button>
                </div>
            </div>

            {/* floating icon home */}
            <div className='fixed bottom-5 right-5 z-50'>
                <NavLink to='/'>
                    <div className='w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary-color)] shadow-2xl hover:bg-[var(--primary-color)]/50 transition-colors duration-300'>
                    <svg viewBox="0 0 1024 1024" width={34} xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"/></svg>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Create