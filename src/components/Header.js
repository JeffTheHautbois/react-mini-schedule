import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button text='Hello'/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Mini Schedule'
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
