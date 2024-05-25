import React from 'react';
import ItemBlog from '../components/blog/item-blog/ItemBlog';

// image blog
import blogImage1 from "../assets/image/blogs/blog-1.png";
import blogImage2 from "../assets/image/blogs/blog-2.png";
import blogImage3 from "../assets/image/blogs/blog-3.png";
import blogImage4 from "../assets/image/blogs/blog-4.png";
const Blogs = () => {
    const blogs = [
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
        {
          uuid: "5",
          image: blogImage1,
          title: "طرز تهیه قهوه دمی با دستگاه اروپرس",
          date: "1402/5/21",
        },
        {
          uuid: "6",
          image: blogImage2,
          title: "یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
          date: "1402/5/21",
        },
      ];
    return (
        <div className='lg:max-w-[1260px] w-full px-5 m-20 md:m-40'>
         <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 justify-center items-start gap-5">
          {blogs.map((item, index) => (
            <ItemBlog key={index} blog={item} />
          ))}
        </section>
        </div>
    );
};

export default Blogs;