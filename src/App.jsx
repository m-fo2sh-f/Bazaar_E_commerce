
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Home from "./pages/home/Home";
import Search from "./pages/Search/Search";
import Cart from "./pages/cart/Cart";
import SignIn from "./pages/signIn/signIn";
import Product from "./pages/product/products"
import { CartProvider } from "./context/Form";
import SignUp from "./pages/signUp/signUp";
function App() {
  return (
    <CartProvider>

      <>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/login"
            element={

              <SignIn />

            }
          />
          <Route
            path="/signup"
            element={

              <SignUp />

            }
          />

          <Route
            path="/search/:search"
            element={
              <Layout>
                <Search />
              </Layout>
            }
          />

          <Route
            path="/products/:id"
            element={
              <Layout>
                <Product />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
        </Routes>
      </>
    </CartProvider>
  );
}

export default App;
