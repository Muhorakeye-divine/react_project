import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import ProductList from './components/ListProduct/PorductList';
import Checkout from './pages/UserBuy/UserBuy';
import PersonForm from './pages/FormrSave/FormSave';

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <h1>Bienvenue sur D_Soko</h1>
        <Link to="/person-form">
          <button>Enregistrer un client</button>
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
            path="/person-form"
            element={<PersonForm />}
          />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;