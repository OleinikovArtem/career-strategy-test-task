import { store } from './redux/store';
import { Provider } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/home';
import CatalogPage from './pages/catalog';

import Header from './components/header';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />

          <Route
            path="*"
            element={() => <h1 className="text-5xl">NOT FOUND</h1>}
          />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
