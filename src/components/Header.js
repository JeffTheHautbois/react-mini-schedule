import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showInsert}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={showInsert ? 'Close' : 'New Task'} onClick={onAdd}/>
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
