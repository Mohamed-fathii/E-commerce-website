import "./App.scss";
import Navbar from "components/navbar/navbar";
import Store from "pages/store";
import Cart from "pages/cart";
import Authenticate from "pages/authenticate";
import { Route, Routes } from "react-router-dom";
import { mainContext } from "utils/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "utils/firebaseConfig";
import { useEffect } from "react";
import { fetchUserData } from "utils/firebaseFunction";
function App() {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    user && fetchUesr();
  }, [user]);

  const fetchUesr = async () => {
    const res = await fetchUserData(user);
    if (res.success) {
      console.log(res.data);
    }
  };
  return (
    <>
      <mainContext.Provider value={{ user, loading }}>
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
