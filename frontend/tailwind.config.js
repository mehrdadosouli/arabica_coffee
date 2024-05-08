/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    colors: {
      // primary & secondary color
      primaryColor: "#FDBA74", // orange 300
      secondaryColor: "#FED7AA", // orange 200

      //
      // status color
      errorColor: "#F87171", // red 400
      warningColor: "##FACC15", // yellow 400
      successPrimaryColor: "#10B981", // emerald 500
      successSecondaryColor: "#059669", // emerald 600

      //
      // background light color
      bgLightColor: "#F3F4F6", // gray 100
      bgItemLightColor: "#ffffff", // white

      bgDarkColor: "#3F3F46", // zinc 700
      bgItemDarkColor: "#52525B", // zinc 600

      //
      // text color
      textDisableColor: "#D1D5DB", // gray 300

      textPrimaryLightColor: "3F3F46", // zinc 700
      textSecondaryLightColor: "#FED7AA", // orange

      textPrimaryDarkColor: "#ffffff", // zinc 700
      textSecondaryDarkColor: "#FDBA74", // orange 300

      //
      // icon color
      iconPrimaryColor: "#3F3F46", // zinc 700
      iconSecondaryColor: "#9CA3AF", // gray 400
      iconAccentColor: "#FED7AA", // orange 200
      iconHoverColor: "#059669", // emerald 600

      //
      // line & border color
      linePrimaryColor: "#D1D5DB", // gray 300
      lineSecondaryColor: "#F3F4F6", // gray 100
      lineAccentColor: "#FED7AA", // orange 200
      "white-10": "rgba(255, 255, 255, 0.10)", // white/10

      //
      // custom color
      customColor1: "#634832", // brown 900
      customColor2: "#967259", // brown 600
      customColor3: "#DBC1AC", // brown 300
      customColor4: "#ECE0D1", // brown 100

      Brown: {
        900: "#634832",
        600: "#967259",
        300: "#DBC1AC",
        100: "#ECE0D1",
      },
      "orange-lights": "rgba(254, 215, 170, 0.20)",
      menu: "rgba(0, 0, 0, 0.50)",
      lightens: "rgba(0, 0, 0, 0.40)",
    },

    backgroundColor: {
      darken: "#27272A",
      btn: "linear-gradient(270deg, #FDBA74 0%, #FED7AA 100%);",
    },

    boxShadow: {
      Light: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      menu: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      lights: "0px 0px 10px 0px rgba(0, 0, 0, 0.04)",
    },

    dropShadow: {
      lights: "0px 0px 10px 0px rgba(0, 0, 0, 0.04)",
    },


    letterSpacing: {
      "tracking-tighter": "0.065em",
    },

    borderColor: {
      "4xl": "2rem",
      darkBorder: "rgba(255, 255, 255, 0.10)",
    },

    fontFamily: {
      dana: "Dana",
      danaBold: "Dana DemiBold",
      danaMedium: "Dana Medium",
      morabba: "Morabba",
      morabbaBold: "Morabba Bold",
      morabbaMedium: "Morabba Medium",
    },
    extend: {
      backgroundImage: {
        "desktop-image": "url(../src/image/headerBgDesktop.webp)",
        "mobile-image": "url(../src/image/headerBgMobile.webp)",
        products: "url(../src/image/body-bg.png)",
        "bottom-product-right":
          "url(../src/image/categories/category-right.jpg)",
        "bottom-product-left": "url(../src/image/categories/category-left.jpg)",
        oranges: "linear-gradient(270deg, #FDBA74 0%, #FED7AA 100%)",
        article1: "url(../src/image/blogs/blog-1.png);",
        article2: "url(../src/image/blogs/blog-2.png);",
        article3: "url(../src/image/blogs/blog-3.png);",
        article4: "url(../src/image/blogs/blog-4.png);",
        article5: "url(../src/image/contact.png);",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
