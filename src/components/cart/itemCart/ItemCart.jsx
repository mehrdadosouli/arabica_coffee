import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  decrease,
  addToCard,
  removed,
} from "../../../redux/features/products/ProductsSlice";

const ItemCart = ({ product }) => {
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(addToCard(product));
  };
  const decreaseHandler = () => {
    dispatch(decrease(product));
  };
  const removeHandler = () => {
    dispatch(removed(product));
  };
  return (
    <>
      <div className="w-full p-2 lg:py-5 flex flex-row justify-start items-center gap-2">
        <img
          src={product.image}
          alt={product.image}
          className="size-20 object-contain"
        />

        <div className="flex flex-col justify-start items-start gap-1 lg:gap-2.5">
          {/* name */}
          <h5 className="w-full text-right font-medium text-sm lg:text-base text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            {product.product}
          </h5>

          {/* offer amount */}
          <span className="text-right font-normal text-xs text-[#0D9488] dark:text-successPrimaryColor">
            {(product.amount * (product.offer / 100)).toLocaleString()}

            {product.amount != -1 && (
              <span className="text-right text-xs font-normal">
                {" "}
                تومان تخفیف
              </span>
            )}
          </span>

          {/* amount  */}
          <div className="w-full flex justify-between items-center text-right font-bold text-base lg:text-xl text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
            <div>
              {product?.offer_amount
                ? product.offer_amount.toLocaleString()
                : product.amount.toLocaleString()}{" "}
              <span className="text-right text-xs font-normal">تومان</span>
            </div>
            <div className="flex">
              {product?.count < 2 ? (
                <button onClick={removeHandler} className="btnCard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="md:size-6 size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              ) : (
                <button onClick={decreaseHandler} className="btnCard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="md:size-6 size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
              )}
              {
                product.count
              }
              {product?.count && (
                <button onClick={increaseHandler} className="btnCard">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="md:size-6 size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-px bg-lineSecondaryColor dark:bg-white-10" />
    </>
  );
};

ItemCart.propTypes = {
  product: PropTypes.shape({
    uuid: PropTypes.string,
    image: PropTypes.string,
    product: PropTypes.string,
    amount: PropTypes.number,
    rating: PropTypes.number,
    offer: PropTypes.number,
    offer_amount: PropTypes.number,
  }),
};

export default ItemCart;
