import { useFormik } from 'formik';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import img1 from '../assets/image/register.jpg'

export default function RegisterPage() {
  const navigate=useNavigate()
  const rgx = /^[\w-\.]+@(?:[a-zA-Z]+\.)+com{1,4}$/i;
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate:values => {
      const errors = {};
     if(!values.firstName){
      errors.firstName='لطفا اسم خود را وارد کنید'
    }else if(values.firstName.length < 6){
      errors.firstName='تعداد کاراکتر کمتر از 6 تا می باشد'
    }
    if(!values.email){
      errors.email='لطفا ایمیل خود را وارد کنید'
    }else if(!rgx.test(values.email)){
       errors.email='لطفا ایمیل خود را صحیح وارد کنید'
     }
     if(!values.lastName){
       errors.lastName='لطفا فامیلی خود را وارد کنید'
     }else if(values.lastName.length < 6){
       errors.lastName='تعداد کاراکتر کمتر از 6 تا می باشد'
     }
     return errors
    },
    onSubmit: values => {
      if(values){
        Swal.fire({
          title: "ثبت نام با موفقیت انجام شد",
          icon: "success"
        }).then(()=>navigate('/'));
      }
    }
  });
  return (
    <div className='w-full min-h-[40rem] relative'>
      <img src={img1} alt="register" className='w-full h-screen object-cover' />
      <form onSubmit={formik.handleSubmit} className='md:w-1/3 w-3/4 p-6 mx-auto flex flex-col gap-5 shadow-2xl rounded-xl absolute top-[20%] md:left-[60%] left-0 right-0 z-10 bg-white bg-opacity-40 animate__animated animate__flipInY'>
        <h1 className='text-2xl text-Brown-300 font-semibold absolute top-5 left-10'>ثبت نام</h1>
       <label htmlFor="firstName" className='text-primaryColor font-bold'>نام</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
         className='p-1 rounded-md'
       />
       {formik.errors.firstName && formik.touched.firstName && <h2 className='text-red-400'>{formik.errors.firstName}</h2>}
       <label htmlFor="lastName" className='text-primaryColor font-bold'>نام خانوادگی</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
         className='p-1 rounded-md'
       />
       {formik.errors.lastName && formik.touched.lastName && <h2 className='text-red-400'>{formik.errors.lastName}</h2>}
       <label htmlFor="email" className='text-primaryColor font-bold'>ایمیل</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
         className='p-1 rounded-md'
       />
       {formik.errors.email && formik.touched.email && <h2 className='text-red-400'>{formik.errors.email}</h2>}
       <button type="submit" className='w-fit px-10 py-2 mx-auto flex justify-center items-center bg-primaryColor text-bgItemLightColor font-bold rounded-md hover:bg-secondaryColor'>Submit</button>
     </form>
    </div>
  )
}
