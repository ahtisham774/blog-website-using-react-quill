import { useState } from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import Editor from "./components/editor"
import Blogs from "./post/view/blogs"
import { Route, Routes } from "react-router-dom"
import Create from "./post/create/create_blog"
import Blog from "./components/blog"

function App() {


    const [editorValue, setEditorValue] = useState('')
    // const modules = {
    //     toolbar: [
    //         [{ 'header': [1, 2, false] }],
    //         ['bold', 'italic', 'underline','strike', 'blockquote'],
    //         [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    //         ['link', 'image'],
    //         ['clean']
    //         ],
    // }
    // const formats = [
    //     'header',
    //     'bold', 'italic', 'underline', 'strike', 'blockquote',
    //     'list', 'bullet', 'indent',
    //     'link', 'image'
    // ]

    return (
        <>
            {/* <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={(e)=> {console.log(e); setEditorValue(e)}}
        modules={modules}
        formats={formats}
        placeholder="Write something awesome..."

    /> */}

            {/* <Editor value={editorValue} setValue={setEditorValue} />
            <code
                style={{
                    display: 'block',
                    marginTop: 10,
                    padding: 10,
                    background: '#f9f9f9',
                    border: '1px solid #ddd'
                }}
                dangerouslySetInnerHTML={{ __html: editorValue }}
            /> */}
            <Routes>
                <Route path="/" element={<Blogs/>}/>
                <Route path='blog/new' element = {<Create/>} />
                <Route path='blog/:id' element = {<Blog/>} />
            </Routes>
        </>
    )
}

export default App
