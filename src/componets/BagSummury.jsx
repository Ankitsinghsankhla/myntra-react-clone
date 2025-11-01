import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import PriceDetails from "./PriceDetails";
import styles from "./BagSummury.module.css";

const BagSummury = () => {
  const bagItems = useSelector((state) => state.bagItems);
  const productsList = useSelector((state) => state.items);
  const bagProducts = productsList.filter((item) => bagItems.includes(item.id));

  return (
    <>
      <div className={styles.BagSummuryContainer}>
        <div className="bagCards">
          {bagProducts.map((bagItem) => (
            <ItemCard item={bagItem} />
          ))}
        </div>
        <PriceDetails bagItems= {bagProducts} />
      </div>
    </>
  );
};

export default BagSummury;
