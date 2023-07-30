import PropTypes from 'prop-types'
export const FormatDate = (date) => {

    let d = new Date(date).toLocaleDateString('Default',{
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
  return (
    d !== "Invalid Date" ? d : date 
  )
}

FormatDate.propTypes = {
    date: PropTypes.string
}



