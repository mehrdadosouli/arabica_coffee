import PropTypes from "prop-types";
import ItemCart from "./itemCart/ItemCart";

//image product
import p1 from "../../assets/image/products/p1.png";
import p2 from "../../assets/image/products/p2.png";

const Cart = ({ showCartMobile, hamburgerCartBtn }) => {
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
      offer: 10,
      offer_amount: 154000,
    },
  ];

  return (
    <div
      className={`w-full h-screen absolute top-0 left-0 flex flex-col justify-start items-end gap-6 overflow-hidden duration-300 ${
        showCartMobile
          ? "translate-x-0 opacity-100 ease-in"
          : "-translate-x-full opacity-0 ease-in-out"
      }`}
    >
      <span
        onClick={() => hamburgerCartBtn()}
        className="w-screen h-screen absolute top-0 left-0 z-0 bg-[#00000040]"
      ></span>

      <div className="w-2/3 h-full relative px-4 z-50 bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-col justify-start items-start gap-4">
        <div className="w-full pt-5 pb-1 flex justify-between items-center">
          {/* close hamburger cart Btn */}
          <svg
            onClick={() => hamburgerCartBtn()}
            className="size-6 text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor duration-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <span className="font-normal text-base text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            سبد خرید
          </span>
        </div>

        <hr className="w-full h-px bg-lineSecondaryColor dark:bg-white-10" />

        <div className="w-full overflow-y-auto">
          {products.map((item, index) => (
            <ItemCart key={index} product={item} />
          ))}
        </div>

        <div className="w-full absolute bottom-0 left-0 py-5 px-4 bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-row justify-start items-center gap-4">
          <button className="w-28 h-11 font-normal text-base lg:text-lg text-textPrimaryDarkColor bg-[#0D9488] rounded-xl duration-300">
            ثبت سفارش
          </button>

          <div className="flex flex-col justify-start items-start gap-0.5">
            <span className="w-full text-right text-xs font-medium text-textDisableColor">
              مبلغ قابل پرداخت
            </span>

            <h6 className="text-right font-semibold text-base lg:text-xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor flex flex-row justify-start items-center gap-1">
              350.000
              <span className="text-right text-sm font-normal">تومان</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  showCartMobile: PropTypes.bool,
  hamburgerCartBtn: PropTypes.func,
};

export default Cart;
