import Content from "./Content";
import Slider from "./Slider";
import ProductList from "./ProductList";

const HomePage = () => {
  return (
    <div>
      
      <Content />  {/* Display Content Section */}

      <Slider />   {/* Display Slider Component */}
      <ProductList /> {/* Display Product List */}
    </div>
  );
};

export default HomePage;
