import PropTypes from 'prop-types'
import Button from './Button'
const header = ({title}) => {
  const onclick = () => {
    console.log('Click')
  }
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button color='black' text='ADD' onClick={onclick} />
    </header>
  )
}


// 

// const headingStyle =
// {
//    color: 'red',
//    backgroundColor: 'black',
// }
export default header
