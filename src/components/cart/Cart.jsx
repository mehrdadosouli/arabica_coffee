import PropTypes from "prop-types";
import ItemCart from "./itemCart/ItemCart";

import { useSelector } from "react-redux";
import { basketState, funcCheckout } from "../../redux/features/products/ProductsSlice";
import { Link } from "react-router-dom";

const Cart = ({ showCartMobile, hamburgerCartBtn }) => {
  const checkout=useSelector(funcCheckout)
  const products = useSelector(basketState)

  return (
    <div
      className={`w-full max-h-[70vh] absolute lg:rounded-2xl lg:relative top-0 left-0 flex flex-col justify-start items-end gap-6 duration-300 overflow-y-scroll cursor-default ${showCartMobile
          ? "translate-x-0 opacity-100 ease-in"
          : "-translate-x-full opacity-0 ease-in-out"
        } lg:!translate-x-0`}
    >
      <span
        onClick={() => hamburgerCartBtn()}
        className="w-screen h-screen block lg:hidden absolute top-0 left-0 z-0 bg-[#00000040]"
      ></span>

      <div className={`w-2/3 lg:w-full h-full relative px-4 lg:p-5 z-50 bg-bgItemLightColor dark:bg-bgItemDarkColor ${showCartMobile ? 'flex' : 'hidden'} flex-col justify-start items-start gap-4 rounded-2xl overflow-y-scroll`}>
        <div className="w-full pt-5 pb-1 lg:py-0 flex justify-between items-center">
          {/* close hamburger cart Btn */}
          <svg
            onClick={() => hamburgerCartBtn()}
            className="size-6 block lg:hidden text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor duration-300"
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
          <span className="font-normal text-base lg:text-xs text-textDisableColor"> 
            {products.length} مورد
          </span>
          <Link to='/checkout' className="font-normal text-base lg:text-xs text-textPrimaryLightColor dark:text-textPrimaryDarkColor lg:text-primaryColor dark:lg:text-primaryColor">
            {window.innerWidth <= 430 ? "سبد خرید" : "مشاهده سبد خرید"}
          </Link>
        </div>

        <hr className="w-full block lg:hidden h-px bg-lineSecondaryColor dark:bg-white-10" />

        <div className="w-full overflow-y-auto">
          {products.length ?
            products.map((item, index) => (
              <ItemCart key={index} product={item} />
            ))
            :
            <span className="dark:text-primaryColor">آیتمی موجود نیست</span>
            }
        </div>

        <div className="w-full absolute lg:relative bottom-0 left-0 px-4 pb-5 lg:px-0 bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-row lg:flex-row-reverse justify-start lg:justify-between items-center gap-4">
          <Link to='/checkout' className="w-28 h-11 flex justify-center items-center font-normal text-base lg:text-lg text-textPrimaryDarkColor bg-[#0D9488] rounded-xl duration-300">
            ثبت سفارش
          </Link>

          <div className="flex flex-col justify-start items-start gap-0.5">
            <span className="w-full text-right text-xs font-medium text-textDisableColor">
              مبلغ قابل پرداخت
            </span>

            <h6 className="text-right font-semibold text-base lg:text-xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor flex flex-row justify-start items-center gap-1">
              {checkout ? checkout.toLocaleString() : 0}
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
