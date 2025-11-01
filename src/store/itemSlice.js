import { createSlice } from "@reduxjs/toolkit";

const Items = [
  {
    id: "001",
    companyName: "Indian Patroliam",
    productName: "Kurti",
    Decription: "lorem this us rhw projectis gane",
    imageUrl: "../image/1.jpg",
    price: {
      originalPrize: "445",
      curruntPrize: "300",
    },
    otherDetails: {
      DeliveryCharge:'20'
    },
  },

  {
    id: "002",
    companyName: "ANIRAV",
    productName: "Unstitched Crepe Salwar Suit Material ",
    Decription: "best for womens",
    imageUrl: "../image/3.jpg",
    price: {
      originalPrize: "260",
      curruntPrize: "250",
    },
    otherDetails: {
       DeliveryCharge:'20'
    },
  },
  {
    id: "003",
    companyName: "YASHIKA",
    productName: "Unstitched Cotton Blend Salwar",
    Decription: "bets salwar ever",
    imageUrl: "../image/2.jpg",
    price: {
      originalPrize: "2000",
      curruntPrize: "760",
    },
    otherDetails: {
       DeliveryCharge:'20'
    },
  },
  {
    id: "004",
    companyName: "RIdhima",
    productName: "Indian TEam T-shirt",
    Decription: "best for men indian fans",
    imageUrl: "../image/4.jpg",
    price: {
      originalPrize: "1500",
      curruntPrize: "740",
    },
    otherDetails: {
       DeliveryCharge:'20'
    },
  },
  {
    id: "005",
    companyName: "Ganpat shop",
    productName: "bike ",
    Decription: "best for men indian fans",
    imageUrl: "../image/5.jpg",
    price: {
      originalPrize: "1500",
      curruntPrize: "740",
    },
    otherDetails: {
       DeliveryCharge:'20'
    },
  },
];

const itemsSlice = createSlice({
  name: "items",
  initialState: Items,
  reducers: {
    addInitialItems: (state, action) => {
      return state;
    },
  },
});
export const itemsActions = itemsSlice.actions;
export default itemsSlice;
