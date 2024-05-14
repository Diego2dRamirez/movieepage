import './App.css'
import { Header } from './Components/Header/Header'
import { InputSearch } from './Components/InputSearch/InputSearch'
import { Tendencias } from './Components/Tendencias/Tendencias'
import { Footer } from './Components/Footer/Footer'

function App() {
  return (
    <section className='w-full h-screen'>
      <Header />
      <InputSearch />
      <Tendencias />
      <Footer />
    </section>
  )
}

export default App
