
import img from '../../assets/image/club/diamond.png'
export default function TitleSectionProducts({changeFilter}) {

    
  return (
    <div className='lg:max-w-[1260px] flex flex-row justify-between items-center py-5 mx-10 border-solid border-b-2 border-gray-200'>
        <img src={img} alt='coffee arabica' className='w-20' />
        <select name="filter" id="" className='p-2 rounded-xl' onChange={changeFilter}>
            <option value="default">مرتب سازی بر اساس پیش فرض</option>
            <option value="free">مرتب سازی بر اساس ارزان ترین</option>
            <option value="expensive">مرتب سازی بر اساس گران ترین</option>
        </select>
    </div>
  )
}
