import './styles/Navbar.css'
import { CONST } from '../constants/consts'

export default function Navbar() {
    const menuItems = CONST.NAVBAR_ITEMS

    return (
            <nav>
                <h1>Logo</h1>
                <ul>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={`/${item}`}>{item}</a>
                            </li>
                        )
                    })}
                </ul>
                <a href="#">Carrito</a>
            </nav>
    )
}