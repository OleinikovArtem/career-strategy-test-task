import { store } from './redux/store';
import { Provider } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Header from './components/header';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
