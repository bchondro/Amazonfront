import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Auth from "../Pages/Auth/Auth";
import Cart from "../Pages/Cart/Cart";
import { Elements } from "@stripe/react-stripe-js";
import Landing from "../Pages/Landing/Landing";
import Orders from "../Pages/Orders/Orders";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Payment from "../Pages/Payment/Payment";
import Product from "../components/Product/Product";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import React from "react";
import Results from "../Pages/Results/Results";
import { loadStripe } from "@stripe/stripe-js";

//for stripe






//provide public key and load it to stirpe
const stripePromise = loadStripe(
  "pk_test_51RUsh3FQ3VGFalqJL1qqaCG11L2YWaoMznJFiSZWvDiBWtrirVAcQjCW1e4qUV7jyeE51WPlQTd5awokqjAv3Z9e009Rz7UR3h"
);

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/payments"
          element={
            // wrap payment component by Element from stripe and provide stripe prop with a value of stripePromise and hold that in protectedRoute
            <ProtectedRoute
              msg={
                "Please sign in to complete your payment. (You'll be redirected to the checkout page)"
              }
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"Please sign in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products" element={<Product />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
