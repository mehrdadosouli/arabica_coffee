import ItemProduct from "../components/product/item-product/item-product";

import headerBgDesktop from "../assets/image/headerBgDesktop.webp";

import farmer from "../assets/image/body-bg.png";
import categoryLeft from "../assets/image/categories/category-left.jpg";
import categoryRight from "../assets/image/categories/category-right.jpg";
import TitleSection from "../components/title-section/TitleSection";

export default function HomePage() {
  return (
    <main className="w-screen flex flex-col justify-center items-center">
      {/* image back landing and image farmer */}

      <img
        src={headerBgDesktop}
        alt="headerBgDesktop"
        className="w-full h-auto xl:bg-contain bg-cover 2xl:bg-cover bg-no-repeat"
      />

      <section className="w-screen relative pt-32 flex flex-col justify-center items-center gap-14">
        <img
          src={farmer}
          alt="farmer"
          className="w-full h-auto absolute top-0 object-contain bg-no-repeat opacity-25"
        />

        <TitleSection
          title={`جدیدترین محصولات`}
          subTitle={`فرآوری شده از دانه قهوه`}
          toLink={``}
        />

        <section className="grid grid-cols-[300px_300px_300px_300px] grid-rows-2 justify-between items-start gap-5">
          <ItemProduct />
        </section>

        <section className="flex flex-row justify-center items-center gap-5">
          <section className="w-[620px] h-[248px] relative flex flex-col justify-center items-start rounded-2xl overflow-hidden">
            <div className="z-20 pr-16 flex flex-col justify-start items-start gap-4">
              <h2 className="text-textPrimaryDarkColor text-4xl font-bold text-right">
                انواع قهوه
              </h2>
              <h2 className="text-textPrimaryDarkColor text-xl font-normal text-right">
                ترکیبی و تک خاستگاه
              </h2>
            </div>

            <span className="size-full absolute z-10 bg-gradient-to-tl from-black/65 from-30% to-black/10"></span>
            <img
              src={categoryRight}
              alt="categoryRight"
              className="size-full absolute z-0 object-cover"
            />
          </section>

          <section className="w-[620px] h-[248px] relative flex flex-col justify-center items-start rounded-2xl overflow-hidden">
            <div className="z-20 pr-16 flex flex-col justify-start items-start gap-4">
              <h2 className="text-textPrimaryDarkColor text-4xl font-bold text-right">
                پودر های فوری
              </h2>
              <h2 className="text-textPrimaryDarkColor text-xl font-normal text-right">
                نسکافه ، هات چاکلت ، ماسالا
              </h2>
            </div>
            <span className="size-full absolute z-10 bg-gradient-to-tl from-black/65 from-30% to-black/10"></span>
            <img
              src={categoryLeft}
              alt="categoryLeft"
              className="size-full absolute z-0 object-cover"
            />
          </section>
        </section>
      </section>
    </main>
  );
}
