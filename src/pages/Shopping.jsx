import { useEffect } from "react";
import ItemProduct from "../components/product/item-product/ItemProduct";
//image product
import p1 from "../assets/image/products/p1.png";
import p2 from "../assets/image/products/p2.png";
import p3 from "../assets/image/products/p3.png";
import p4 from "../assets/image/products/p4.png";

//image product 2
import p5 from "../assets/image/products/p5.png";
import p6 from "../assets/image/products/p6.png";
import p7 from "../assets/image/products/p7.png";
import p8 from "../assets/image/products/p8.png";
import { Link } from "react-router-dom";

export default function Shopping() {
  const products = [
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
  ];

  const products2 = [
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
  ];

  useEffect(() => {
    document.title = "کافه عربیکا - فروشگاه";
  }, []);

  return (
    <section className="w-full lg:max-w-[1260px] relative lg:pt-32 py-20 px-4 lg:px-0 flex flex-col gap-10 lg:gap-20">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
          {products.map((item, index) => (
            <ItemProduct key={index} product={item} />
          ))}
        </section>
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center">
            {products2?.length !== 0 &&
              products2?.map((item) => (
                <Link key={item.uuid} to={`#`}>
                  <section>
                    <ItemProduct product={item} />
                  </section>
                </Link>
              ))}

            {!products2?.length === 0 && (
              <h2 className="w-full text-slate-800 text-base text-center font-bold capitalize">
                products is not found!
              </h2>
            )}
        </section>
  </section>
  )}
