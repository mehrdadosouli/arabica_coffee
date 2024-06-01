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

// image club
import activity from "../../../assets/image/club/Activity.svg";
import discovery from "../../../assets/image/club/Discovery.svg";
import ticketStar from "../../../assets/image/club/Ticket-Star.svg";

// image blog
import blogImage1 from "../../../assets/image/blogs/blog-1.png";
import blogImage2 from "../../../assets/image/blogs/blog-2.png";
import blogImage3 from "../../../assets/image/blogs/blog-3.png";
import blogImage4 from "../../../assets/image/blogs/blog-4.png";

// image category

import cat1 from "../../../assets/image/categories/category1.png";
import cat2 from "../../../assets/image/categories/category2.png";
import cat3 from "../../../assets/image/categories/category3.png";
import cat4 from "../../../assets/image/categories/category4.png";
import cat5 from "../../../assets/image/categories/category5.png";

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
          count:0
        },
        {
          uuid: "2",
          image: p2,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 5,
          offer: 12,
          offer_amount: 154000,
          count:0
        },
        {
          uuid: "3",
          image: p3,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: -1,
          rating: 3,
          offer: 0,
          offer_amount: 0,
          count:0
        },
        {
          uuid: "4",
          image: p4,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
          count:0
        },
        {
          uuid: "5",
          image: p3,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
          count:0
        },
        {
          uuid: "6",
          image: p4,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 5,
          offer: 12,
          offer_amount: 154000,
          count:0
        },
        {
          uuid: "7",
          image: p1,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: -1,
          rating: 3,
          offer: 0,
          offer_amount: 0,
          count:0
        },
        {
          uuid: "8",
          image: p2,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
          count:0
        },
      ],
      product2:[
        {
          uuid: "9",
          image: p5,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
          count:0
        },
        {
          uuid: "10",
          image: p6,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 5,
          offer: 12,
          offer_amount: 154000,
          count:0
        },
        {
          uuid: "11",
          image: p7,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: -1,
          rating: 3,
          offer: 0,
          offer_amount: 0,
          count:0
        },
        {
          uuid: "12",
          image: p8,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
          count:0
        },
        {
          uuid: "13",
          image: p5,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
          count:0
        },
        {
          uuid: "14",
          image: p6,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 5,
          offer: 12,
          offer_amount: 154000,
          count:0
        },
        {
          uuid: "15",
          image: p7,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: -1,
          rating: 3,
          offer: 0,
          offer_amount: 0,
          count:0
        },
        {
          uuid: "16",
          image: p8,
          product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
          amount: 175000,
          rating: 4,
          offer: 0,
          offer_amount: 0,
          count:0
        },
      ]
    },
    basket:[],
    checkout:0,
    club : [
      { icon: activity, itemClub: "ماموریت ها" },
      { icon: discovery, itemClub: "چرخ و بخت" },
      { icon: ticketStar, itemClub: "جایزه ها" },
    ],
    blogs :[
      {
        uuid: "1",
        image: blogImage1,
        title: "طرز تهیه قهوه دمی با دستگاه اروپرس",
        date: "1402/5/21",
      },
      {
        uuid: "2",
        image: blogImage2,
        title: "یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
        date: "1402/5/21",
      },
      {
        uuid: "3",
        image: blogImage3,
        title: "طرز تهیه یک فنجان کافه زینو برزیلی",
        date: "1402/5/21",
      },
      {
        uuid: "4",
        image: blogImage4,
        title: "طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی",
        date: "1402/5/21",
      },
    ],
    categories :[
      { uuid: "1", image: cat1, category_name: "قهوه دمی و اسپرسو" },
      { uuid: "2", image: cat2, category_name: "لوازم جانبی و تجهیزات" },
      { uuid: "3", image: cat3, category_name: "اسپرسو ساز" },
      { uuid: "4", image: cat4, category_name: "پک تستر قهوه" },
      { uuid: "5", image: cat5, category_name: "قهوه ترک" },
    ],
    
}

export const ProductsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addToCard:(state,action)=>{
          const productToAdd = { ...action.payload };
          state.checkout += action.payload.offer_amount ? action.payload.offer_amount : action.payload.amount
          const findIndexItem=state.basket.findIndex(elem=>elem.uuid == productToAdd.uuid)
          if(findIndexItem != -1){
            state.basket[findIndexItem].count += 1
          }else{
            productToAdd.count = 1
            state.basket.push(productToAdd)
          }
        },
        decrease:(state,action)=>{
          const productToAdd = { ...action.payload };
          const findIndexItem=state.basket.findIndex(elem=>elem.uuid == productToAdd.uuid)
          state.checkout -= action.payload.offer_amount ? action.payload.offer_amount : action.payload.amount
          if(findIndexItem != -1){
            state.basket[findIndexItem].count -= 1
          }
        },
        removed:(state,action)=>{
          const productToAdd = { ...action.payload };
          const findIndexItem=state.basket.findIndex(elem=>elem.uuid == productToAdd.uuid)
          if(findIndexItem != -1){
           const resultFilter= state.basket.filter(i=>i.uuid !== productToAdd.uuid)
           state.basket=resultFilter
          state.checkout -= productToAdd.offer_amount? productToAdd.offer_amount : productToAdd.amount 
          }
        }
    }
})
export default ProductsSlice.reducer
export const {addToCard , decrease ,removed} = ProductsSlice.actions
export const funcAllproducts = (store)=> store.products.allProducts
export const funcAllclub = (store)=> store.products.club
export const funcAllBlogs = (store)=> store.products.blogs
export const funcAllCategories = (store)=> store.products.categories
export const basketState=(store)=>store.products.basket
export const funcCheckout=(store)=>store.products.checkout
