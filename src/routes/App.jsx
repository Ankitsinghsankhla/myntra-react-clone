import Header from "../componets/Header";
import { Outlet } from "react-router-dom";
import Content from "../componets/Content";
import Slider from "../componets/Slider";
import Footer from "../componets/Footer";
import ProductList from "../componets/ItemCard";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/*<Content />
      <Slider />

      <ProductList />*/}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
