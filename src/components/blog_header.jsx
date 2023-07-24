import { NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'

const BlogHeader = () => {
    return (
        <header className="w-full">
            <nav className="w-full flex items-center justify-between p-2 shadow-md">
                <div className="w-72">
                    <img src={logo} className="w-full h-auto object-cover " alt="Logo" />
                </div>

                <div className="flex-1 flex justify-center">
                    <input type="search"  className="w-1/2 p-2 px-5 shadow-sm border-2 rounded-full outline-none focus:border-slate-400 focus:outline-none" placeholder="search post" />
                </div>
                <ul className="flex gap-5 px-3">
                    <NavLink to='/'>
                        <li className="p-2 px-5 rounded-lg hover:bg-slate-300/30 text-slate-600 hover:text-slate-800 transition-colors duration-300">
                            Blogs
                        </li>
                    </NavLink>
                    <NavLink to='/blog/new'>
                    <li className="p-2 px-5 rounded-lg hover:bg-slate-300/30 text-slate-600 hover:text-slate-800 transition-colors duration-300">
                            Create
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default BlogHeader