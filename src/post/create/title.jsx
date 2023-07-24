
import PropTypes from 'prop-types'

const Title = ({title, setTitle}) => {
  return (
    <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full p-2 px-5 my-2 shadow-sm border-b-2 rounded-md outline-none focus:border-b-slate-300  focus:outline-none' />
  )
}


Title.propTypes = {
    title: PropTypes.string,
    setTitle: PropTypes.func
}


export default Title