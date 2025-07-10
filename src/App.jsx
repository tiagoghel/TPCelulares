
import './App.css'
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/header/';
import Footer from './components/footer/';
import Home from './pages/home/';
import Contacto from './pages/contacto/';
import Productos from './pages/productos/';
import Producto from './pages/producto/';
import QuienesSomos from './pages/quienes-somos/';
import Notfound from './pages/notfound';



function App() {
 

  return (
    <HashRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/productos" element={<Productos/>} />
      <Route path="/quienes-somos" element={<QuienesSomos/>} />
      <Route path="/producto/:idCelular" element={<Producto />} />
      <Route path="*" element={<Notfound/>}/>
    </Routes>
    <Footer />
  </HashRouter>
  )
}

export default App
