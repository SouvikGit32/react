import {Route, Switch, Redirect} from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/productDetail';

function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Switch>
          <Route path = '/' exact>
            <Redirect to = '/Welcome' />
          </Route>

          <Route path = '/Welcome' >
            <Welcome/>
          </Route> 

          <Route path ='/Products' exact>
            <Products />
          </Route>

          <Route path = '/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;


//our-domain.com/Welcome => Welcome Component
//our-domain.com/Products => Products Component
//our-domain.com/Product-detail/anyproduct