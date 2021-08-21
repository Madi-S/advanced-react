import './index.scss'

const Button = ({
    styles,
    text = 'OK',
    type = 'info',
    onClick = () => {}
}) => {
    return (
        <button className={`btn btn-${type}`} style={styles} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
