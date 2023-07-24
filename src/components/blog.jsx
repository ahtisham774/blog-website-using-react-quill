import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BlogHeader from "./blog_header"


const Blog = () => {

    const {id} = useParams()
    const [blog ,setBlog] = useState(null)

    useEffect(()=>{

        const temp_blogs = localStorage.getItem('blogs')
        if(temp_blogs){
            const temp_blog = JSON.parse(temp_blogs).find((blog)=>blog.id === parseInt(id))
           
            setBlog(temp_blog)
        
        }
    },[id])  



  return (

    <div className=" relative flex flex-col w-full items-center justify-center">
        <BlogHeader/>
        {
            blog ?
            <div className="flex flex-col justify-center items-center my-4 w-7/12 p-4 shadow-md rounded-md" >
                <h1 className='text-2xl font-bold'>{blog.title}</h1>
                <p className='text-sm text-slate-600'>Published on {"."} {new Date(blog.published_at).toLocaleString('default', {
                        day: '2-digit'
                        , month: 'short',
                        year: 'numeric'
                    })}</p>
                <p dangerouslySetInnerHTML={{__html:blog.content}} className="w-full border p-2 rounded-md my-2" />
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