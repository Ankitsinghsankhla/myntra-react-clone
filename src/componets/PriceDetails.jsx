// PriceDetails.jsx
import React from 'react';
import styles from './PriceDetails.module.css';

const PriceDetails = ({bagItems}) => {

  const bagItemsLength = bagItems.length;

  const totalOriginalPrice = bagItems.reduce(
    (sum, item) => sum + parseInt(item.price.originalPrize.replace("₹", "")), 
    0
  );
  console.log(totalOriginalPrice)

  const totalCurrentPrice = bagItems.reduce(
    (sum, item) => sum + parseInt(item.price.curruntPrize.replace("₹", "")), 
    0
  );
  let discount = 0;
  if(totalOriginalPrice > totalCurrentPrice){
   discount = totalOriginalPrice - totalCurrentPrice;
      
  }

  console.log(totalCurrentPrice)

  
  return (
    <div className={styles.priceContainer}>
      <h2 className={styles.title}>Price Details</h2>
      
      <div className={styles.priceItem}>
        <span>Price ({bagItemsLength} item)</span>
        <span>₹{totalOriginalPrice}</span>
      </div>
      
      <div className={styles.priceItem}>
        <span>Discount</span>
        <span className={styles.discount}>− ₹{discount}</span>
      </div>
      
      <div className={styles.priceItem}>
        <span>Delivery Charges</span>
        <span className={styles.freeDelivery}>
          <span className={styles.strikethrough}>₹80</span> Free
        </span>
      </div>
      
      <div className={styles.priceItem}>
        <span>Protect Promise Fee</span>
        <span>₹18</span>
      </div>
      
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>₹2,476</span>
      </div>
      
      <div className={styles.savings}>
        You will save ₹9,522 on this order
      </div>
      
      <button className={styles.orderButton}>Place Order</button>
    </div>
  );
};

export default PriceDetails;