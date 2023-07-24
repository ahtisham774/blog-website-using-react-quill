
import { PropTypes } from 'prop-types';

const BlogItem = ({ blog, handleClick }) => {
    return (
        <div className='w-full flex group  my-2 items-center justify-between p-3 px-5 rounded-md border border-slate-400/30 hover:shadow-md transition-shadow duration-300 cursor-pointer' >
            {/* create icon of first letter of title */}
            <div className='flex gap-4'>
                <div className='w-12 h-12 rounded-md border font-serif border-slate-800/40 flex items-center justify-center text-slate-800/40 uppercase text-xl font-bold'>
                    {blog.title[0]}
                </div>

                <div >
                    <h1 className='text-xl font-medium'>{blog.title}</h1>
                    <p className='text-sm text-slate-600'>Published {"."} {new Date(blog.published_at).toLocaleString('default', {
                        day: '2-digit'
                        , month: 'short',
                        year: 'numeric'
                    })}</p>
                </div>
            </div>

            {/* eye icon */}
            <div className='hidden w-12 h-12 group-hover:flex items-center justify-center text-slate-800/40 uppercase text-xl font-bold' onClick={() => handleClick(blog.id)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4C6 4 1 12 1 12s5 8 11 8 11-8 11-8-5-8-11-8z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6s2 2.5 2 6-2 6-2 6" /></svg>
            </div>

        </div>
    )
}

BlogItem.propTypes = {
    blog: PropTypes.object,
    handleClick: PropTypes.func
}

export default BlogItem