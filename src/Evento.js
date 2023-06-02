import Button from './Botao'

function Evento() {

    function Btn_click() {
        console.log('Botão clicado!')
    }

    function digaOla() {
        console.log('Olá, mundo')
    }

    return (
        <div>
            <h1>Clique no botão</h1>
            <button onClick={Btn_click}>Enviar</button>
            <Button mensagem={digaOla} texto="Primeiro Evento" />
        </div>
    )
}

export default Evento