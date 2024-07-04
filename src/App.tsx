import './App.css'
import { Router } from './Router'

// Importo los componentes que necesito
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Importo las paginas que necesito
import Home from './pages/Home'
import Tienda from './pages/Tienda'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import NotFoundPage from './pages/404'
import ProductoDescription from './components/ProductoDescription'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/Inicio',
    component: Home,
  },
  {
    path: '/Tienda',
    component: Tienda,
  },
  {
    path: '/Nosotros',
    component: Nosotros
  },
  {
    path: '/Contacto',
    component: Contacto
  },
  {
    path: '/Tienda/:id',
    component: ProductoDescription
  }
]

function App() {

  return (
    <main>
      <Navbar />
      <Router routes={routes} defaultComponent={NotFoundPage} />
      <Footer />
    </main>
  )
}

export default App
