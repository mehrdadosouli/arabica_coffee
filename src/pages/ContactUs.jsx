import React, { useEffect, useState, lazy } from 'react';
import img1 from '../../src/assets/image/contact-us.jpg';
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';


export default function ContactUs() {
  const notify = (txt) => toast(txt);
  const [data, setData] = useState({
    name: "",
    texts: "",
    email: "",
    subject: ""
  });
  const [err, setErr] = useState({})
  const [loadImg, setLoadImg] = useState(true)
  const [loadMap, setLoadMap] = useState(true)

  const formChangeHandler = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData)
  }
  const blurHandler = (e) => {
    if (!e.target.value) {
      const newError = { ...err };
      if (!data[e.target.name]) {
        newError[e.target.name] = `لطفا ${e.target.name} را وارد کنید`
      }
      setErr(newError)
      notify(`لطفا فیلد ${e.target.name} را پر کنید`)
    } else {
      const newError = { ...err };
      delete newError[e.target.name];
      setErr(newError);
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()

    setErr({})
    const newErr = {};
    for (const item in data) {

      if (!data[item]) {
        newErr[item] = `لطفا ${item} را وارد کنید`
        notify(`لطفا فیلد ${[item]} را پر کنید`)
      }
    }
    setErr(newErr)

    if (data.name && data.subject && data.email && data.texts) {
      Swal.fire({
        title: '',
        text: 'نظر شما با موفقیت ارسال شد',
        icon: 'success'
      })
    }

  }
  const onLoadHandler = () => {
    setLoadImg(false)
  }
  useEffect(() => {
    document.title = "کافه عربیکا - ارتباط با ما";
  }, []);
  return (
    <div className="size-full relative">
      {loadImg && <svg className='z-50 absolute top-1/4 left-1/2' width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" /><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite" /></path></svg>}
      {img1 ? <img src={img1} alt="" className='w-full h-screen object-cover' loading="lazy" onLoad={onLoadHandler} /> : <div className='w-full h-screen bg-gray-800'></div>}
      <h1 className='w-fit text-5xl font-bold absolute top-1/3 left-0 right-0 mx-auto animate-bounce'>تماس با قهوه عربیکا</h1>
      {loadMap && <svg className='z-50 mx-auto' width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" /><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite" /></path></svg>}
      <iframe data-aos="zoom-in-up" onLoad={() => setLoadMap(false)} className='lg:max-w-[1260px] w-screen h-[400px] mx-auto' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25922.90947792249!2d51.320461173189166!3d35.692666990752535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05732c2e91%3A0xfcbec017befd15f4!2sAzadi%20Tower!5e0!3m2!1sen!2s!4v1716377163043!5m2!1sen!2s" ></iframe>
      <div className='lg:w-[1260px] w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 p-10 '>
        <div className='flex flex-row gap-10 p-5 dark:text-white border border-solid border-gray-200 shadow-xl rounded-3xl'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <div className='flex flex-col gap-10'>
            <div>
              <span> فروشگاه شعبه 1 : </span>
              <span>تهران، آزادی جنب پاساژ گلشن، قهوه عربیکا</span>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-col justify-between items-center gap-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                </svg>
                <span>تلفن تماس:  5862-021 </span>
              </div>
              <div className='flex flex-col justify-between items-center gap-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span> ایمیل:  5862-021 </span>
              </div>
            </div>
          </div>
        </div>
        {/* form */}
        <div className='p-5 border border-solid border-gray-200 shadow-xl rounded-3xl'>
          <form onSubmit={submitHandler} className='flex flex-col gap-5'>
            <legend className='text-center dark:text-bgItemLightColor relative before:w-1/3 before:h-[2px] before:bg-gray-300 before:absolute before:left-0 before:top-1/2 after:w-1/3 after:h-[2px] after:bg-gray-300 after:absolute after:right-0 after:top-1/2 '>فرم تماس با ما</legend>
            <label className='dark:text-bgItemLightColor' htmlFor="name">اسم</label>
            <input id='name' className='p-2 rounded-md border border-solid border-gray-300' type="text" placeholder='نام خود را وارد کنید' value={data.name} name='name' onChange={formChangeHandler} onBlur={blurHandler} />
            {err.name && (<span className='text-red-500'>{err.name}</span>)}
            <label className='dark:text-bgItemLightColor' htmlFor="email">ایمیل</label>
            <input id='email' className='p-2 rounded-md border border-solid border-gray-300' type="email" placeholder='ایمیل خود را وارد کنید' value={data.email} name='email' onChange={formChangeHandler} onBlur={blurHandler} />
            {err.email && <span className='text-red-500'>{err.email}</span>}
            <label className='dark:text-bgItemLightColor' htmlFor="subject">موضوع</label>
            <input id='subject' className='p-2 rounded-md border border-solid border-gray-300' type="text" placeholder='موضوع را بنویسید' value={data.subject} name='subject' onChange={formChangeHandler} onBlur={blurHandler} />
            {err.subject && <span className='text-red-500'>{err.subject}</span>}
            <label className='dark:text-bgItemLightColor' htmlFor="texts">متن پیام</label>
            <textarea id='texts' name="texts" value={data.texts} onChange={formChangeHandler} onBlur={blurHandler} ></textarea>
            {err.texts && <span className='text-red-500'>{err.texts}</span>}
            <input type="submit" className=' w-32 mx-auto p-2 dark:text-bgItemLightColor bg-primaryColor rounded-2xl hover:cursor-pointer' value='ثبت و ارسال' />
          </form>
        </div>
      </div>
    </div>
  );
}



<div className='text-white'>


</div>