import { createSlice } from "@reduxjs/toolkit"
//image product
import p1 from "../../../assets/image/products/p1.png";
import p2 from "../../../assets/image/products/p2.png";
import p3 from "../../../assets/image/products/p3.png";
import p4 from "../../../assets/image/products/p4.png";
//image product 2
import p5 from "../../../assets/image/products/p5.png";
import p6 from "../../../assets/image/products/p6.png";
import p7 from "../../../assets/image/products/p7.png";
import p8 from "../../../assets/image/products/p8.png";

const initialState={
    allProducts:{
      product1:[
        {
          uuid: "1",
          image: p1,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
        },
        {
          uuid: "2",
          image: p2,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 5,
          offer: 12,
          offer_amount: 154000,
        },
        {
          uuid: "3",
          image: p3,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: -1,
          rating: 3,
          offer: 0,
          offer_amount: 0,
        },
        {
          uuid: "4",
          image: p4,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
        },
        {
          uuid: "5",
          image: p3,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
        },
        {
          uuid: "6",
          image: p4,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 5,
          offer: 12,
          offer_amount: 154000,
        },
        {
          uuid: "7",
          image: p1,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: -1,
          rating: 3,
          offer: 0,
          offer_amount: 0,
        },
        {
          uuid: "8",
          image: p2,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
        },
      ],
      product2:[
        {
          uuid: "1",
          image: p5,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
        },
        {
          uuid: "2",
          image: p6,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 5,
          offer: 12,
          offer_amount: 154000,
        },
        {
          uuid: "3",
          image: p7,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: -1,
          rating: 3,
          offer: 0,
          offer_amount: 0,
        },
        {
          uuid: "4",
          image: p8,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
        },
        {
          uuid: "5",
          image: p5,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
        },
        {
          uuid: "6",
          image: p6,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 5,
          offer: 12,
          offer_amount: 154000,
        },
        {
          uuid: "7",
          image: p7,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: -1,
          rating: 3,
          offer: 0,
          offer_amount: 0,
        },
        {
          uuid: "8",
          image: p8,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
        },
      ]
    }
    
}

export const ProductsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
            
    }
})
export default ProductsSlice.reducer
export const funcAllproducts = (store)=> store.products.allProducts
