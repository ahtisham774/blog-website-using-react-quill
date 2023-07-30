
const BlogFooter = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-white text-center  flex items-center justify-center md:fixed bottom-0 w-full cursor-default">
            <div className="w-fit px-4 py-2 text-center text-neutral-700 border-2 rounded-full m-2 border-t-slate-200">
                © {year} Copyright:
               
                    InkChronicles
            </div>
        </footer>


    )
}

export default BlogFooter