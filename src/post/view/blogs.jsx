import { useEffect, useState } from "react"
import BlogItem from "../../components/blog_item"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { url } from "../../utils/backend_url"


const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getAll = () => {
            axios.get(url+'/blog/all').then(
                res => { return res.data.data }
            )
                .then(
                    data => { setBlogs(sort(data)) }
                )
                .catch(
                    err => { console.log(err) }
                )
        }
        getAll()
    }, [])


    const sort = (data) => {
       return data.sort((a, b) => {
            return new Date(b.published_at) - new Date(a.published_at)
        })
    }
    const handleClick = (id) => {
        navigate(`/blog/${id}`)

    }


    return (
        <div className=" relative flex flex-col w-full items-center my-20 md:my-28  justify-center">

            {
                blogs.length > 0 ?
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