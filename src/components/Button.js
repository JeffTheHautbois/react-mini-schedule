import PropTypes from 'prop-types'
const Button = ({ colour, text}) => {
    return (
        <div>
            <button style={{ backgroundColor: colour }} className='btn'>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    colour: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    colour: PropTypes.string,
}

export default Button
