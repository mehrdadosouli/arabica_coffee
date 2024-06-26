// image club
import diamond from "../../assets/image/club/diamond.png";

import { Link, useParams } from "react-router-dom";
import ItemProduct from "./item-product/ItemProduct";
import { useKeenSlider } from "keen-slider/react";
import TitleSection from "../title-section/TitleSection";

// light box image
// import Lightbox from "yet-another-react-lightbox";
// import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCard, funcAllclub, funcAllproducts } from "../../redux/features/products/ProductsSlice";

const Product = () => {
  const select=useSelector(funcAllproducts)
  const club=useSelector(funcAllclub)
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(addToCard(product));
  };
  const allProducts=[
    ...select.product1,
    ...select.product2
  ]
  // const [open, setOpen] = useState(false);
  const params = useParams(); // get param from nav address
  const productId = params.id;
  const product=allProducts.find(item=>item.uuid == productId)
  console.log("🚀 ~ Product ~ productId:", productId);
  // const [searchParams] = useSearchParams();
  // const navigate = useNavigate();

  useEffect(() => {
    document.title = "کافه عربیکا - محصول قهوه";
  }, []);

  // const product = {
  //   uuid: "1",
  //   image: p1,
  //   product: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  //   description:
  //     "اتیوپی یکی از کشورهایی است که محصولات آن را همه قهوه نوشان می شناسند و اگر یک قهوه خور حرفه ای باشید عطر و طعم های گلی و میوه ای آن شما را سرحال کرده و بدون اتکا به کافئین از خوردن یک نوشیدنی جذاب لذت خواهید برد طعم یادهای بری جات از خصوصیات بارز این قهوه است",
  //   amount: 175000,
  //   rating: 4,
  //   offer: 12,
  //   offer_amount: 157000,
  // };

  // keen slider near products
  const [sliderRef] = useKeenSlider({
    loop: false,
    renderMode: "performance",
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 14,
    },
    rtl: true,
    drag: true,
    initial: 0,

    breakpoints: {
      "(min-width: 425px)": {
        loop: false,
        slides: { perView: 2, spacing: 14 },
      },
      "(min-width: 640px)": {
        loop: false,
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 768px)": {
        loop: false,
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1024px)": {
        loop: false,
        slides: { perView: 4, spacing: 20 },
      },
    },
  });

  // keen slider image product
  const [sliderRefImageProduct, instanceRefImageProduct] = useKeenSlider({
    loop: false,
    renderMode: "performance",
    mode: "free-snap",
    slides: {
      perView: 3.2,
      spacing: 10,
    },
    rtl: true,
    drag: true,
    initial: 0,

    breakpoints: {
      "(min-width: 425px)": {
        loop: false,
        slides: { perView: 3.2, spacing: 14 },
      },
      "(min-width: 640px)": {
        loop: false,
        slides: { perView: 4.2, spacing: 10 },
      },
      "(min-width: 768px)": {
        loop: false,
        slides: { perView: 6.2, spacing: 10 },
      },
      "(min-width: 1024px)": {
        loop: false,
        slides: { perView: 2.5, spacing: 10 },
      },
    },
  });

  return (
    <main className="w-full lg:w-[1260px] px-4 lg:px-0 pt-20 lg:pt-44 pb-10 lg:pb-20 flex flex-col justify-center items-center gap-10 lg:gap-20">
      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-6">
        {/* image product */}
        <div className="w-full lg:w-1/4 p-2.5 lg:pt-0 bg-bgItemLightColor dark:bg-bgItemDarkColor rounded-2xl shadow-defaultShadow flex flex-col justify-center items-center gap-4 lg:gap-0">
          <img
            src={product.image}
            alt={product.image}
            className="size-60 lg:size-96 object-contain"
          />

          <section className="navigation-wrapper w-full relative flex flex-row justify-center items-center">
            <span
              className="lg:size-6 text-iconPrimaryColor  dark:text-[#fff] dark:hover:text-iconPrimaryColor bg-bgItemLightColor hover:bg-[#D1D5DB] dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center items-center rounded-full cursor-pointer select-none duration-300"
              onClick={(e) =>
                e.stopPropagation() || instanceRefImageProduct.current?.prev()
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-6 "
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <div ref={sliderRefImageProduct} className="keen-slider">
              {allProducts?.length !== 0 &&
                allProducts?.map((item) => (
                  <Link key={item.image} to={`#`}>
                    <section className="keen-slider__slide">
                      <img
                        src={item.image}
                        alt={item.image}
                        className="bg-bgLightColor dark:bg-bgDarkColor/50 rounded-xl object-contain"
                      />
                    </section>
                  </Link>
                ))}

              {!allProducts?.length === 0 && (
                <h2 className="w-full text-slate-800 text-base text-center font-bold capitalize">
                  products is not found!
                </h2>
              )}
            </div>

            <span
              className="lg:size-6 text-iconPrimaryColor dark:text-[#fff] dark:hover:text-iconPrimaryColor bg-bgItemLightColor hover:bg-[#D1D5DB] dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center items-center rounded-full cursor-pointer select-none duration-300"
              onClick={(e) =>
                e.stopPropagation() || instanceRefImageProduct.current?.next()
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </section>
        </div>

        {/* description */}
        <div className="w-full lg:w-2/4 flex flex-col justify-start items-start gap-5 lg:gap-10">
          <span className="py-1 px-5 text-sm lg:text-lg font-medium text-textPrimaryDarkColor dark:text-textPrimaryLightColor bg-primaryColor rounded-lg flex flex-row justify-start items-center gap-2">
            {product.offer}% تخفیف ویژه
          </span>

          <h1 className="w-full text-2xl lg:text-4xl font-bold text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            {product.product}
          </h1>

          <p className="w-full lg:w-4/5 text-base lg:text-lg font-normal text-textPrimaryLightColor/80 dark:text-textDisableColor leading-8">
            {product.description}
          </p>
        </div>

        {/* add to card  */}
        <div className="w-full lg:w-1/4 p-2.5 lg:p-5 bg-bgItemLightColor dark:bg-bgItemDarkColor rounded-2xl shadow-defaultShadow flex flex-col justify-start items-start gap-5">
          {/* star , comparison */}

          <div className="w-full flex flex-row justify-between items-center">
            {/* comparison button */}
            <span className="text-iconSecondaryColor hover:text-[#0D9488] dark:hover:text-successPrimaryColor duration-300 flex flex-row justify-center items-center gap-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 lg:size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
              مقایسه
            </span>
            {/* rating star product */}
            <div className="flex flex-row justify-start items-center">
              {[...Array(Number(5) - product.rating)].map((star, index) => (
                <span key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 lg:size-6 text-iconSecondaryColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </span>
              ))}

              {[...Array(product.rating)].map((star, index) => (
                <span key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-4 lg:size-6 text-warningColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                </span>
              ))}
            </div>
          </div>

          <hr className="w-full h-px bg-[#D1D5DB] dark:bg-white-10 rounded-full" />

          <div className="flex flex-col justify-start items-start gap-2">
            <span className="w-full text-right text-xs font-normal text-textDisableColor">
              مبلغ قابل پرداخت
            </span>
            <div className="flex flex-row flex-wrap justify-center items-center gap-3">
              {/* print original amount or offer amount product */}
              <span
                className={
                  product.amount != -1
                    ? "text-right font-bold text-lg lg:text-2xl text-[#0D9488] dark:text-successPrimaryColor"
                    : "text-right font-medium text-lg lg:text-2xl text-errorColor"
                }
              >
                {product.amount != -1
                  ? product.offer != 0 && product.offer_amount != 0
                    ? product.offer_amount.toLocaleString()
                    : product.amount.toLocaleString()
                  : "فعلا موجود نیست"}

                {product.amount != -1 && (
                  <span className="text-right text-sm font-normal"> تومان</span>
                )}
              </span>

              {/* print original amount product */}
              {product.offer_amount != 0 &&
                product.offer != 0 &&
                product.amount != -1 && (
                  <div className="relative text-right font-medium text-lg lg:text-xl text-[#9CA3AF] flex flex-row justify-start items-center">
                    <div className="w-full h-px absolute top-2.5 lg:top-3 bg-errorColor"></div>
                    <span>
                      {product.amount.toLocaleString()}{" "}
                      <span className="text-right text-sm font-normal">
                        تومان
                      </span>
                    </span>
                  </div>
                )}
            </div>
          </div>

          <button className="w-full h-12 font-normal text-base lg:text-lg text-textPrimaryDarkColor bg-successPrimaryColor hover:bg-successSecondaryColor rounded-xl duration-300 flex flex-row justify-center items-center gap-2 lg:gap-4" onClick={increaseHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 lg:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            افزودن به سبد خرید
          </button>
        </div>
      </div>

      <TitleSection
        title={`محصولات مشابه`}
        subTitle={``}
        textLink={`مشاهده بیشتر`}
        toLink={`#`}
      />

      <section className="navigation-wrapper w-full relative flex flex-row justify-center items-center">
        {/* <span
          className="lg:size-11 absolute z-40 lg:left-28 lg:-top-32 text-iconPrimaryColor  dark:text-[#fff] dark:hover:text-iconPrimaryColor bg-bgItemLightColor hover:bg-[#D1D5DB] dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center items-center rounded-full cursor-pointer select-none duration-300"
          onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-6 "
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span> */}

        <div ref={sliderRef} className="keen-slider">
          {allProducts?.length !== 0 &&
            allProducts?.map((item) => (
              <Link key={item.uuid} to={`#`}>
                <section className="keen-slider__slide">
                  <ItemProduct product={item} />
                </section>
              </Link>
            ))}

          {!allProducts?.length === 0 && (
            <h2 className="w-full text-slate-800 text-base text-center font-bold capitalize">
              products is not found!
            </h2>
          )}
        </div>

        {/* <span
          className="lg:size-11 absolute z-40 lg:left-0 lg:-top-32 text-iconPrimaryColor dark:text-[#fff] dark:hover:text-iconPrimaryColor bg-bgItemLightColor hover:bg-[#D1D5DB] dark:bg-[#3F3F46] dark:hover:bg-[#fff] flex justify-center items-center rounded-full cursor-pointer select-none duration-300"
          onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </span> */}
      </section>

      {/* club */}
      <section className="w-full h-64 lg:h-36 px-4 lg:px-11 bg-gradient-to-r from-successPrimaryColor to-successSecondaryColor flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 rounded-2xl">
        <div className="w-full lg:w-1/2 flex flex-row justify-between lg:justify-start items-center gap-4 lg:gap-6">
          <img
            src={diamond}
            alt="diamond"
            className="w-[87px] lg:w-28 object-contain"
          />
          <div className="flex flex-col justify-start items-start lg:gap-2">
            <h2 className="w-full font-[Morabba] font-bold text-2xl lg:text-5xl text-right text-textPrimaryDarkColor">
              کافی کلاب
            </h2>
            <h2 className="w-full font-[Morabba] font-light text-lg lg:text-2xl text-right text-textPrimaryDarkColor">
              میدونستی میتونی با امتیاز هات قهوه بگیری ؟
            </h2>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-row justify-start items-center gap-3">
          <div className="w-3/4 flex flex-row justify-start items-center gap-2 lg:gap-5">
            {club.map((item, index) => (
              <div
                key={index}
                className="w-1/3 h-20 lg:size-24 text-xs lg:text-sm font-normal text-successSecondaryColor bg-bgItemLightColor rounded-2xl flex flex-col justify-center items-center gap-1.5 lg:gap-3"
              >
                <img
                  src={item.icon}
                  alt={`item ${item.icon}`}
                  className="size-10 lg:size-12 object-contain"
                />
                {item.itemClub}
              </div>
            ))}
          </div>

          <div className="w-1/4 h-20 lg:h-24 flex flex-col justify-between items-start">
            <span className="w-full pr-2 text-2xl lg:text-3xl font-bold text-textPrimaryDarkColor">
              524
            </span>
            <span className="w-full pr-2 text-xs lg:text-sm font-normal text-textPrimaryDarkColor">
              امتیاز شما
            </span>
            <button className="w-full p-1 lg:px-2.5 lg:h-8 text-xs lg:text-sm font-normal text-center text-textPrimaryDarkColor bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full flex flex-row justify-center items-center cursor-pointer">
              دریافت جایزه
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4 lg:size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

{
  /* <Lightbox
            open
            close={() => setOpen(false)}
            plugins={[Thumbnails, Zoom]}
            slides={imageProduct?.map((items) => {
              return {
                src: `${items}`,
                alt: `${items}`,
              };
            })}
          /> */
}

// Product.propTypes = {

//   product: PropTypes.shape({
//     uuid: PropTypes.string,
//     image: PropTypes.string,
//     product: PropTypes.string,
//     amount: PropTypes.number,
//     rating: PropTypes.number,
//     offer: PropTypes.number,
//     offer_amount: PropTypes.number,
//   }),
// };

export default Product;
