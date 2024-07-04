import { CONST } from '../constants/consts'
import { Link } from '../Link'
import './styles/Home.css'

export default function Home() {

    return (
        <div className="Home">
            <header className="Home-header">
                <h1>{ CONST.FRASE_INICIO }</h1>
                <Link to='/Contacto' className='button' target={''}>{ CONST.FRASE_BOTON }</Link>
            </header>

        </div>
    )
}