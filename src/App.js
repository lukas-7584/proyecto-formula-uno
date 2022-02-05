
import './App.css';
import NavBar from './NavBar'; 
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fo from './components/Fo';
import ItemDetailContainer from './components/ItemDetailContainer';
import Categoria from './components/Categoria';
import Cart from './components/carritowidget/cart';
import CartProvider from './context/CartProvider';



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
                  <div className='App-header'> una breve historia de donde venimos </div>
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
  // return (
  //   <>

  //   <div className="App">

  //     <header className="App-header">
        

  //         <div className='App2'><NavBar /></div>

  //           < ItemListContainer />

  //     </header>
      
  //   </div>
    
  //   </>

    
  // );
}

export default App;
