import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import styles from "./ProductList.module.css";

const ProductList = () => {
    const ItemsList = useSelector((state) => state.items);
  return (
    <div className={styles.ProductListContainer}>
        {ItemsList.map((item) => <ItemCard key={item.id} item = {item} />)}
    </div>
  )
}

export default ProductList