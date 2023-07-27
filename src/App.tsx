// Main App.js file which load first, it'll manage entire Application routing with lazy loading

import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

const Home = lazy(() =>
  import('./pages/Home')
);

const Products = lazy(() =>
  import('./pages/Products')
);

const ProductDetails = lazy(() =>
  import('./pages/ProductDetails')
);



function App() {
  return (
    <Box sx={{ display: 'flex' }} >
      <Suspense fallback={null}>

        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />

          {/* Product Listing Routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />

          <Route path="*" element={<Products />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
