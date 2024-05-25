import { useParams } from 'react-router-dom';
// image blog
import blogImage1 from "../assets/image/blogs/blog-1.png";
import blogImage2 from "../assets/image/blogs/blog-2.png";
import blogImage3 from "../assets/image/blogs/blog-3.png";
import blogImage4 from "../assets/image/blogs/blog-4.png";
const Blog = () => {
    const itemBlog = useParams()
    const blogs = [
        {
            uuid: "1",
            image: blogImage1,
            title: "طرز تهیه قهوه دمی با دستگاه اروپرس",
            date: "1402/5/21",
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veritatis? Veniam iusto asperiores debitis voluptatum qui similique minima alias odio placeat eaque. Quam vel omnis iure recusandae sunt non ipsum!'
        },
        {
            uuid: "2",
            image: blogImage2,
            title: "یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز",
            date: "1402/5/21",
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veritatis? Veniam iusto asperiores debitis voluptatum qui similique minima alias odio placeat eaque. Quam vel omnis iure recusandae sunt non ipsum!'
        },
        {
            uuid: "3",
            image: blogImage3,
            title: "طرز تهیه یک فنجان کافه زینو برزیلی",
            date: "1402/5/21",
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veritatis? Veniam iusto asperiores debitis voluptatum qui similique minima alias odio placeat eaque. Quam vel omnis iure recusandae sunt non ipsum!'
        },
        {
            uuid: "4",
            image: blogImage4,
            title: "طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی",
            date: "1402/5/21",
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veritatis? Veniam iusto asperiores debitis voluptatum qui similique minima alias odio placeat eaque. Quam vel omnis iure recusandae sunt non ipsum!'
        },
    ];
    let findBlog = blogs.find(item => item.uuid == itemBlog.id)
    console.log(findBlog);
    return (
        <div className='max-w-[1260px] w-full md:my-40 my-24 px-10 flex flex-col justify-start items-start gap-10 dark:text-white'>
            <h1 className='text-3xl'>{findBlog.title}</h1>
            <span>{findBlog.date}</span>
            <img src={findBlog.image} alt={findBlog.title} className='md:w-[80%] w-full max-h-[400px] object-cover' />
            <p>{findBlog.text}</p>
        </div>

    );
};

export default Blog;