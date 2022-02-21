
import './App.css';
import NavBar from './components/NavBaryFooter/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fo from './components/NavBaryFooter/Fo';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Categoria from './components/Categoria/Categoria';
import Cart from './components/carritowidget/cart';
import CartProvider from './context/CartProvider';
import Nosotros from './components/NavBaryFooter/Nosotros';



function App() {


  return (
    <>

      <CartProvider>
            <BrowserRouter>
            <div className='App2'><NavBar /></div>
              <Switch>

                {/* ruta P/ el Inicio */}
                <Route exact path="/">
                  <div className='App-header'> < ItemListContainer /></div>
                
                </Route>

                {/* ruta p/productos ID */}
                <Route path="/item/:id">
                  <div className='App-header'> <ItemDetailContainer /></div>
                </Route>

                {/* ruta Categorias */}
                <Route path="/categoria/:categoriaId">
                  <div className='App-header'> <Categoria /> </div>
                </Route>

                {/* ruta nosotros */}
                <Route exact path="/nosotros">
                  <div className='App-header'> <Nosotros/> </div>
                </Route>


                {/* ruta carrito */}
                <Route exact path="/carrito">
                  <div className='App-header'> <Cart/> </div>
                </Route>

              </Switch>
              <Fo />
            </BrowserRouter>
      </CartProvider>
    </>
  );
  
}

export default App;
