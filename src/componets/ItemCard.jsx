import "bootstrap/dist/css/bootstrap.css";
import styles from "./ItemCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { bagItemsActions } from "../store/bagItemsSlice";

const ItemCard = ({ item }) => {
  const bagItems = useSelector((state) => state.bagItems);
  const isItemInBag = bagItems.includes(item.id);
  const dispatch = useDispatch();

  /*const pOriginalPrize = item.price.originalPrize;
  const pCurruntPrize = item.price.curruntPrize;*/

  const pOriginalPrize = Number(item.price?.originalPrize) || 0;
  const pCurruntPrize = Number(item.price?.curruntPrize) || 0;

  let showDiscount = 0;
  if (pOriginalPrize > pCurruntPrize) {
    let discount = pOriginalPrize - pCurruntPrize;

    showDiscount = Math.round((discount / pOriginalPrize) * 100);
  }

  const handleAddToCart = () => {
    if (!isItemInBag) {
      dispatch(bagItemsActions.addInitialItemsBag(item.id));
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(bagItemsActions.DeleteItemBag(item.id));
  };

  return (
    <div className={`card ${styles.cardContainer} shadow-sm m-2`}>
      <div className={styles.imageWrapper}>
        <img
          src={item.imageUrl}
          className="card-img-top"
          alt={item.productName}
        />
        {showDiscount > 0 && (
          <span className={styles.discountBadge}>{showDiscount}% Off</span>
        )}
      </div>

      <div className="card-body d-flex flex-column">
        <h6 className="text-muted mb-1">{item.companyName}</h6>
        <h5 className={`card-title ${styles.productName}`}>
          {item.productName}
        </h5>
        <p className={`card-text text-muted ${styles.description}`}>
          {item.Decription}
        </p>

        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>
            ₹{item.price.curruntPrize}
          </span>
          {item.price.originalPrize && (
            <span className={styles.originalPrice}>
              ₹{item.price.originalPrize}
            </span>
          )}
        </div>

        <div className="mt-auto">
          {!isItemInBag ? (
            <button
              type="button"
              className={`btn btn-primary w-100 ${styles.actionButton}`}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          ) : (
            <button
              type="button"
              className={`btn btn-outline-danger w-100 ${styles.actionButton}`}
              onClick={handleRemoveFromCart}
            >
              Remove from Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
