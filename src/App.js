import "./App.scss";
import Navbar from "components/navbar/navbar";
import Store from "pages/store";
import Cart from "pages/cart";
import Authenticate from "pages/authenticate";
import { data, Route, Routes } from "react-router-dom";
import { mainContext } from "utils/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "utils/firebaseConfig";
import { useEffect, useState } from "react";
import { fetchUserData, setupDBListener } from "utils/firebaseFunction";
import { products } from "utils/products";
function App() {
  const [user, loading] = useAuthState(auth);
  const [cartProducts, setCartProducts] = useState();
  const [username, setUserName] = useState();
  const [filterdProducts, setFilterdProducts] = useState([]);
  useEffect(() => {
    user && fetchUesr();
  }, [user]);

  useEffect(() => {
    if (!loading && user) {
      setupDBListener(user, (data) => {
        const updateProducts = products.filter((product) => {
          return !data.some((cartProducts) => cartProducts.id === product.id);
        });
        setFilterdProducts(updateProducts);
        setCartProducts(data);
      });
    }
  }, [user, loading]);

  const fetchUesr = async () => {
    const res = await fetchUserData(user);
    if (res.success) {
      setUserName(res.data.username);
      setCartProducts(res.data.cartProducts);
    }
  };
  return (
    <>
      <mainContext.Provider
        value={{ user, loading, username, cartProducts, filterdProducts }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/authenticate" element={<Authenticate />} />
        </Routes>
      </mainContext.Provider>
    </>
  );
}

export default App;
