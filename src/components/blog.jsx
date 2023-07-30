import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Editor from "./editor"
import {FormatDate} from "./format_Date"
import axios from 'axios'
import { url } from "../utils/backend_url"

const Blog = () => {

    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    const [img,setImg] = useState('')



    

    useEffect(() => {
        const getBlog = (paramId) =>{
            axios.get(url+`blog/${paramId}`).then(
                res=>{
                    return res.data.data
                }
            )
            .then(
                data=>{
                    setBlog(data)
                    setImg(url+'images/'+data.coverImage)
                }
            )
            .catch(
                err=>{
                    console.log(err)
                }
            )
        }

        getBlog(id)
    }, [id])

    useEffect(() => {

        var container = document.querySelector('.ql-container')
        var editor = document.querySelector('.ql-editor')
        var snow = document.querySelector('.ql-container.ql-snow')
        if (container) {

            container.classList.add('w-[100%!important]', 'h-[100%!important]', 'min-w-[100%!important]', 'min-h-[fit-content!important]', 'max-w-[100%!important]', 'max-h-[fit-content!important]')
        }
        if (editor) {
            editor.classList.add('w-[100%!important]', 'h-[100%!important]', 'min-w-[100%!important]', 'min-h-[fit-content!important]', 'max-w-[100%!important]', 'max-h-[fit-content!important]','p-0')
            if(blog.content === '<p><br></p>'){
                editor.innerHTML = 'No content to show'
            }
            editor.removeAttribute('data-placeholder')
        }
        if (snow) {
            snow.setAttribute('style','border:0 !important')
        }

    }, [blog])
   
    return (

        <div className=" relative flex flex-col w-full items-center md:mt-0 justify-center  ">
            {
                blog ?
                    <div className="container mt-20 md:my-32 mx-auto px-2 md:px-6">
                        {/* Section: Design Block */}
                        <section className="relative flex items-center justify-center self-center content-center ">
                           
                           {/* <div className={`bg-[url('${img}')]`+' relative bg-no-repeat bg-cover bg-center w-full h-[300px] overflow-hidden '}></div> */}
                           <img src={img} className="rounded-lg  h-[300px] w-full max-w-full  object-cover" alt="Cover Photo" />
                        </section>
                        
                        <div className="container my-5">
                                    <div className="flex flex-col justify-center items-center md:justify-start gap-2 border-b pb-1 md:items-start w-full mb-3">
                                    <h1 className="font-bold text-2xl text-center md:text-3xl ">{blog.title}</h1>
                                        <p className='text-sm text-slate-600 text-center'>Published on {"."} {
                                            FormatDate(blog.published_at)
                                        }</p>
                                    </div>
                                    <Editor value={blog.content} toolbar={false} setValue={() => { }} readOnly={true} />
                                </div>
                           

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