import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { Categorias } from './Components/Categorias/Categorias'
import { SubCategorias } from './Components/Categorias/SubCategorias'
import { Busqueda } from './Components/Busqueda/Busqueda'
import { Detalles } from './Components/Detalles/Detalles'


function App() {
  return (
    <section className='w-full h-screen'>
      <HashRouter >

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/categorias" element={<Categorias />}/>
          <Route path="/categorias/:name/:id" element={<SubCategorias />}/>
          <Route path="/busqueda/:value" element={<Busqueda />}/>
          <Route path="/detalles/:title/:titleId" element={<Detalles />}/>
          <Route path="*" element={<h1>No Encontrado</h1>}/>
        </Routes>

      </HashRouter>
    </section>
  )
}

export default App
