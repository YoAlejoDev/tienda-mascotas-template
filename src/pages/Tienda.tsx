import './styles/Tienda.css'
import { Productos } from '../constants/productos'
import Card from '../components/Card' // Assuming Card is exported as a named export

export default function Tienda() {
    return (
        <div className="Tienda">
            <h1>Tienda</h1>
            <p>Productos</p>
            <div className="Productos">
                {Productos.map((producto, index) => {
                    return (
                        <Card
                            key={index}
                            id={producto.id}
                            nombre={producto.nombre}
                            descripcion={producto.descripcion}
                            precio={producto.precio}
                            imagen={producto.imagen}
                            stock={producto.stock}
                        />
                    )
                })}
            </div>
        </div>
    )
}