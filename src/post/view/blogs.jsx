import { useEffect, useState } from "react"
import BlogItem from "../../components/blog_item"
import { useNavigate } from "react-router-dom"


const Blogs = () => {

    const [blogs, setBlogs] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const temp_blogs = localStorage.getItem('blogs')
        if (temp_blogs) {
            setBlogs(JSON.parse(temp_blogs).sort((item1,item2) => 

            // sort by publish date and time
            new Date(item2.published_at) - new Date(item1.published_at)

            ))
        }
    }, [])



    const handleClick = (id) => {
        navigate(`/blog/${id}`)

    }


    return (
        <div className=" relative flex flex-col w-full items-center mt-20 md:mt-28  justify-center">

            {
                blogs ?
                    <div className="flex flex-col justify-center items-center w-full">
                        <h1 className="text-2xl font-sans font-bold my-4">All Blogs</h1>
                        <div className="flex flex-col justify-center items-center my-4 w-11/12 lg:w-7/12 p-4 shadow-md" >
                            {blogs.map((blog) => {
                                return <BlogItem blog={blog} key={blog.id} handleClick={handleClick} />
                            })}
                        </div>
                    </div>
                    :

                    <h1 className=' absolute top-1/2 translate-y-80 text-2xl font-bold  text-[var(--primary-color)] my-2'>
                        No Blogs Found
                    </h1>

            }
        </div>
    )
}

export default Blogs