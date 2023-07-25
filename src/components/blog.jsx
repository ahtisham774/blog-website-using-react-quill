import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Editor from "./editor"


const Blog = () => {

    const { id } = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {

        const temp_blogs = localStorage.getItem('blogs')
        if (temp_blogs) {
            const temp_blog = JSON.parse(temp_blogs).find((blog) => blog.id === parseInt(id))

            setBlog(temp_blog)

        }
    }, [id])



    return (

        <div className=" relative flex flex-col w-full items-center mt-20 md:mt-28 justify-center">
            {
                blog ?
                    <div className="flex flex-col justify-center items-center my-10  w-11/12 p-4 shadow-md rounded-md" >
                        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-0 md:justify-between items-center w-full p-2">
                            <h1 className='text-lg sm:text-2xl'>{blog.title}</h1>
                            <p className='text-sm text-slate-600'>Published on {"."} {new Date(blog.published_at).toLocaleString('default', {
                                day: '2-digit'
                                , month: 'short',
                                year: 'numeric'
                            })}</p>
                        </div>
                        <Editor value={blog.content} setValue={() => { }} readOnly={true} />
                    </div>
                    :
                    <h1 className=' absolute top-1/2 translate-y-80 text-2xl font-bold  text-[var(--primary-color)] my-2'>
                        No Blog Found
                    </h1>
            }
        </div>

    )
}

export default Blog