import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/image/app-logo.png";
import logo2 from "../../assets/image/svgs/logo-type.svg";
import { getThemeLocalStorage, setThemeToLocalStorage } from "../../utils/func";

export default function Header() {
  let itemMenu = [
    {
      page: "صفحه اصلی",
      link: "/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      page: "فروشگاه",
      link: "/shopping",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      ),
      submenu: [
        { page: "قهوه ویژه", link: "/shopping/1" },
        { page: "ویژه در سطح جهانی", link: "/shopping/2" },
        { page: "قهوه درجه یک", link: "/shopping/3" },
        { page: "ترکیبات تجاری", link: "/shopping/4" },
        { page: "کپسول قهوه", link: "/shopping/5" },
        { page: "قهوه زینو برزیلی", link: "/shopping/6" },
      ],
    },
    {
      page: "دیکشنری",
      link: "/dictionary",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
      ),
    },
    {
      page: "بلاگ",
      link: "/blog",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      ),
    },
    {
      page: "درباره ما",
      link: "/about-us",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
      ),
    },
    {
      page: "تماس با ما",
      link: "/contact-us",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
          />
        </svg>
      ),
    },
  ];
  let getTheme = getThemeLocalStorage();
  const [theme, setTheme] = useState(getTheme || "dark");
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, []);

  const darkThemeHandler = () => {
    setTheme("dark");
    setThemeToLocalStorage("dark");
    document.documentElement.classList.add("dark");
  };

  const lightThemeHandler = () => {
    setTheme("light");
    setThemeToLocalStorage("light");
    document.documentElement.classList.remove("dark");
  };

  const hamburgerMenuBtn = () => {
    setShowMenuMobile(!showMenuMobile);
    console.log("🚀 ~ hamburgerMenuBtn ~ showMenuMobile:", showMenuMobile);
  };

  return (
    <>
      <header className="hidden w-full fixed z-50 px-10 pt-9 lg:flex justify-between items-center">
        <div className="w-full h-24 px-10 bg-[#00000080] backdrop-blur-sm flex flex-row justify-between items-center rounded-3xl">
          {/* logo and menu */}
          <div className="flex flex-row justify-start items-center gap-9">
            <img src={logo} alt="logo" className="object-contain" />
            <ul className="text-xl font-normal text-textPrimaryDarkColor flex flex-row justify-start items-center lg:gap-9 duration-300">
              {itemMenu.map((item) => (
                <li
                  key={item.page}
                  to={item.link}
                  className={
                    item.submenu
                      ? "relative group"
                      : "hover:text-primaryColor"
                  }
                 >
                  <Link className="group-hover:text-primaryColor pb-4">
                    {item.page}
                  </Link>
                  {item.submenu && (
                    <ul className="min-w-52 absolute mt-4 py-5 px-6 font-normal text-base text-textPrimaryLightColor dark:text-textPrimaryDarkColor bg-bgItemLightColor dark:bg-bgItemDarkColor border-t-4 border-primaryColor rounded-2xl hidden group-hover:flex duration-300 flex-col justify-center items-start gap-4">
                      {item.submenu.map((sub) => (
                        <li
                          key={sub.page}
                          className="[&>*]:transition-colors [&>*]:hover:text-primaryColor"
                        >
                          <Link to={sub.link}>{sub.page}</Link>
                        </li>
                      ))}
                    </ul>
                  )}

                </li>
              ))}
            </ul>
          </div>
          {/* sign - theme - cart */}
          <div className="text-base font-normal text-secondaryColor flex flex-row justify-between items-center gap-2">
            {/* theme - cart */}
            <div className="flex flex-row items-center gap-0 *:duration-300 *:cursor-pointer">
              <Link
                to="/basket"
                className="p-3 hover:bg-secondaryColor/10 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>

              {theme == "light" ? (
                <div
                  onClick={darkThemeHandler}
                  className="p-3 hover:bg-secondaryColor/10 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </div>
              ) : (
                <div
                  onClick={lightThemeHandler}
                  className="p-3 hover:bg-secondaryColor/10 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                </div>
              )}
            </div>

            <hr className="w-px h-full py-5 bg-linePrimaryColor/20" />

            <Link
              to="/register"
              className="px-6 py-3 hover:bg-secondaryColor/10 rounded-full flex flex-row justify-center items-center gap-2.5 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
              ورود | ثبت نام
            </Link>
          </div>
        </div>
      </header>

      <header className="lg:hidden w-full h-16 fixed top-0 z-50 px-4 bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-row justify-between items-center">
        <div
          onClick={hamburgerMenuBtn}
          className="text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {/* logo */}
        <Link to="/">
          <img src={logo2} alt="arabica logo" className="h-10 object-contain" />
        </Link>
        {/* cart icon */}
        <Link
          to="#"
          className="text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:text-primaryColor dark:hover:text-secondaryColor duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Link>

        {/* mobile menu */}
        <div
          className={`w-full h-screen fixed top-0 right-0 flex flex-col justify-start items-start gap-6 duration-300 overflow-hidden ${showMenuMobile
              ? "translate-x-0 ease-in"
              : "translate-x-full ease-in-out"
            }`}
        >
          <span className="w-screen h-screen absolute top-0 left-0 z-0 bg-[#00000040]"></span>

          <div className="w-2/3 h-full px-4 z-10 bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-col justify-start items-start gap-4">
            <div className="w-full py-3 flex justify-between items-center">
              <div className="h-10 flex justify-center items-center gap-3.5">
                <img
                  src={logo}
                  alt="arabica logo"
                  className="h-full object-contain "
                />
                <img
                  src={logo2}
                  alt="arabica logo"
                  className="h-full object-contain "
                />
              </div>

              <span onClick={hamburgerMenuBtn}>
                <svg
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
              </span>
            </div>

            <hr className="w-full h-px bg-lineSecondaryColor dark:bg-white-10" />

            <ul className="w-full text-base font-normal text-textPrimaryLightColor dark:text-textPrimaryDarkColor flex flex-col justify-start items-start gap-2.5 *:duration-300">
              {itemMenu.map((item) => (
                <Link
                  key={item.page}
                  to={item.link}
                  className={
                    item.submenu
                      ? "w-full py-2.5 pr-2.5 rounded-md group group-hover:text-primaryColor hover:text-primaryColor flex flex-col justify-start items-center gap-2"
                      : "w-full py-2.5 pr-2.5 rounded-md hover:text-primaryColor hover:bg-secondaryColor/20 flex flex-row justify-start items-center gap-2"
                  }
                >
                  <div className="w-full flex flex-row justify-start items-center gap-2">
                    {item.icon}
                    {item.page}
                  </div>

                  {item.submenu && (
                    <ul className="w-full py-2.5 px-8 hidden group-hover:flex flex-col justify-center items-start gap-3 *:duration-300">
                      {item.submenu.map((sub) => (
                        <Link
                          to={sub.link}
                          key={sub.page}
                          className="font-normal text-sm hover:text-primaryColor *:bg-textPrimaryDarkColor *:hover:bg-primaryColor flex flex-row justify-center items-center gap-2.5"
                        >
                          <div className="size-1 rounded-full"></div>
                          {sub.page}
                        </Link>
                      ))}
                    </ul>
                  )}
                </Link>
              ))}
            </ul>

            <hr className="w-full h-px bg-lineSecondaryColor dark:bg-white-10" />

            <div>
              <div className="flex gap-5 text-primaryColor text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                  />
                </svg>
                <Link to="/register" className="text-primaryColor">
                  ورود | ثبت نام
                </Link>
              </div>
              <div className="text-primaryColor flex gap-3 mt-5 text-sm">
                {theme == "light" ? (
                  <div
                    onClick={darkThemeHandler}
                    className="hover:cursor-pointer hover:text-primaryColor"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  </div>
                ) : (
                  <div
                    onClick={lightThemeHandler}
                    className="hover:cursor-pointer hover:text-primaryColor"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  </div>
                )}
                <span>{theme == "dark" ? "تم روشن" : "تم تیره"}</span>
              </div>
              <div className="mt-5 text-primaryColor text-sm">
                <Link
                  to="/basket"
                  className="hover:text-primaryColor flex gap-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  <span>سبد خرید</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
