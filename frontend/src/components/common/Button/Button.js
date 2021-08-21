import './index.scss'

const Button = ({
    styles,
    text,
    color = 'purple',
    onClick = () => {}
}) => {
    return (
        <button className={`btn btn-${color}`} style={styles} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
