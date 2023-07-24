import 'react-quill/dist/quill.snow.css'
import Blogs from "./post/view/blogs"
import { Route, Routes } from "react-router-dom"
import Create from "./post/create/create_blog"
import Blog from "./components/blog"
import Page_Not_Found from "./page_not_found"

function App() {

    return (
        <>

            <Routes>
                <Route path="/" element={<Blogs />} />
                <Route path='blog/new' element={<Create />} />
                <Route path='blog/:id' element={<Blog />} />
                <Route path='*' element={<Page_Not_Found />} />
            </Routes>
        </>
    )
}

export default App
