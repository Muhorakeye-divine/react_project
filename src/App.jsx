import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import ProductList from './components/ListProduct/PorductList';
import Checkout from './pages/UserBuy/UserBuy';
import PersonForm from './pages/FormrSave/FormSave';
import PersonManager from './pages/PersonManager/PersonManager';

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <h1>Bienvenue sur D_Soko</h1>
        <Link to="/person-manager">
          <button className='btn btn-secondary'>Enregistrer un client</button>
        </Link>

        <Routes>
          <Route
            path="/"
            element={<ProductList />}
          />

          <Route
            path="/checkout/:id"
            element={<Checkout />}
          />
          <Route
            path="/person-manager"
            element={<PersonManager />}
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;