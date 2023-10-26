import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from '../HomePage/HomePage';
import ProductsList from '../ProductsList/ProductsList';
import ProductDetails from '../ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/:category/products" element={<ProductsList />} />
        <Route path="/:category/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
