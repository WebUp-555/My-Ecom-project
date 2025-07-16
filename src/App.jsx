import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import PaymentPage from './Pages/PaymentPage'
import Products from './Pages/Products';
import Home from './Pages/Home';
import SignIn from './Pages/signin';
import SignUp from './Pages/signup';
import ProductDetails from './Pages/ProductsDetails';
import CartPage from './Pages/cartPage';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

// Routing logic
function AppContent() {
  const location = useLocation();
  const hideNavbarOnRoutes = ['/signin', '/signup'];
  const shouldShowNavbar = !hideNavbarOnRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
         <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default App;