import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { store } from './redux/store';

import HomePage from './pages/home';
import CatalogPage from './pages/catalog';
import CamperPage from './pages/camper';

import Header from './components/header';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />} />

          <Route path="*" element={() => <h1 className="text-5xl">NOT FOUND</h1>} />
        </Routes>
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
