import { NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'
import { useRef } from "react"

const BlogHeader = () => {

    const menuItemRef = useRef(null)
    const menuBtnRef = useRef(null)
  
    const hide = ()=>{
        // check if menu btn is visible
        if(menuBtnRef.current){
            menuItemRef.current.classList.add('hidden')
        }
        
    }

    return (
        <header className="w-full fixed top-0  z-10 bg-white ">
            <nav className="w-full flex flex-col md:flex-row bg-white items-center justify-between p-2 shadow-md">
                <div className="flex w-full md:w-auto justify-between items-center">
                    <div className="w-72">
                        <img src={logo} className="w-full h-auto object-cover " alt="Logo" />
                    </div>
                    {/* hamburger */}
                    <div ref={menuBtnRef} className="md:hidden flex items-center justify-center cursor-pointer" onClick={()=>menuItemRef.current.classList.toggle('hidden')}>
                        <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </div>
                </div>


                <div ref={menuItemRef} className="w-full hidden flex-col items-center bg-inherit z-20 py-5 gap-5 md:gap-0 md:py-2  justify-center md:relative md:top-0 md:flex md:flex-row md:flex-grow ">
                    <div className="flex-1 flex justify-center md:pl-5 xl:pl-0">
                        <input type="search" className="w-full flex-1 xl:flex-none md:w-1/2 p-2 px-5 shadow-sm border-2 rounded-full outline-none focus:border-slate-400 focus:outline-none" placeholder="search post" />
                    </div>
                    <ul className="flex flex-col items-center  py-3 md:py-0 md:flex-row gap-5 px-3">
                        <NavLink to='/' className='w-full md:w-auto text-center' onClick={hide}>
                            <li className="w-full p-2 px-5 rounded-lg hover:bg-slate-300/30 text-slate-600 hover:text-slate-800 transition-colors duration-300">
                                Blogs
                            </li>
                        </NavLink>
                        <NavLink to='/blog/new' className='w-full md:w-auto text-center' onClick={hide}>
                            <li className="w-full p-2 px-5 rounded-lg hover:bg-slate-300/30 text-slate-600 hover:text-slate-800 transition-colors duration-300">
                                Create
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default BlogHeader