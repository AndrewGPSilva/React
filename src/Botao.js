function Button(props) {
    return (
        <button onClick={props.mensagem}>{props.texto}</button>
    )
}

export default Button