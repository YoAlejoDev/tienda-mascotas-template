import './styles/Card.css'

type CardProps = {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    stock: number;
};

export default function Card(props: CardProps) {
    return (
        <div className="Card">
            <h2>{props.nombre}</h2>
            <p>{props.descripcion}</p>
            <img src={props.imagen} alt={props.nombre} />
            <p>${props.precio}</p>
            <p>Stock: {props.stock}</p>
        </div>
    );
}