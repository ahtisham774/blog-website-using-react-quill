
import { useEffect, useState } from 'react'
import Editor from '../../components/editor'
import Title from './title'
import { useNavigate } from 'react-router-dom'
import Alert from '../../utils/alert'
import axios from 'axios'
import { url } from '../../utils/backend_url'

const Create = () => {



    const [editorValue, setEditorValue] = useState('')
    const [coverImage, setCoverImage] = useState(null)
    const [title, setTitle] = useState('')
    const [isPublish, setIsPublish] = useState(false)
    const navigate = useNavigate()
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)




    const post =  () => {
        const formData = new FormData()
        

        formData.append('id', Math.floor(Math.random() * 1000),)
        formData.append('title', title)
        formData.append('content', editorValue)
        formData.append('published_at', new Date().toLocaleDateString())
        formData.append('coverImage', coverImage)
        
        axios.post(url+'blog/new',formData, { headers: {'Content-Type': 'multipart/form-data'}}).then(
            res => {
                if(res.status === 200){
                    setEditorValue('')
                    setTitle('')
                    setIsPublish(true)
                    setTimeout(() => {
                        setIsPublish(false)
                        navigate('/')
                    }, 1500)
                }
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }

    useEffect(() => {
        if (title && editorValue && coverImage) {
            setIsBtnDisabled(false)
        }
        else {
            setIsBtnDisabled(true)
        }
    }, [editorValue, title,coverImage])
    const handleSubmit = (e) => {
        
        e.preventDefault()
        post()
       
    }
    return (
        <div className='flex flex-col justify-center items-center gap-3 my-28 pb-5  '>
            <h1 className='text-2xl font-sans  font-bold text-[var(--primary-color)] my-2'>
                Create Blog
            </h1>
            {
                isPublish && <Alert />
            }
            <div className='w-full flex items-center justify-center '>
              

                    <form onSubmit={handleSubmit} className='w-full lg:w-1/2 flex flex-col gap-4 shadow-2xl p-3  rounded-lg '>
                        <Title title={title} setTitle={setTitle} />
                        <Editor value={editorValue} setValue={setEditorValue} readOnly={false} />
                        <div>
                            <label
                                htmlFor="example1"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                Cover Photo
                            </label>
                            <input
                                id="example1"
                                type="file"
                                onChange={(e) => setCoverImage(e.target.files[0])}
                                accept='image/*'
                                className="block w-full text-sm file:mr-4 file:rounded-md file:cursor-pointer cursor-pointer file:border-0 file:bg-[var(--primary-color)] file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                            />
                        </div>
                        <button type='submit' className='flex items-center gap-2 w-fit p-1 self-end px-5 rounded-full border-2  font-bold text-lg bg-[var(--primary-color)] text-white transition-colors duration-300 disabled:bg-white disabled:text-slate-400 disabled:cursor-not-allowed' disabled={isBtnDisabled} >
                            Publish
                        </button>
                    </form>
            </div>
        </div>
    )
}

export default Create