import image2 from '../../assets/instrument.jpg'
import guitar from '../../assets/guitar.jpg'
import piano from '../../assets/piano.jpg'
import { Link, NavLink } from 'react-router-dom'; 
import axiosInstance from '../../Axios';  // Import your axios instance



function Products() {
    const log=async ()=>{
        await axiosInstance.post('/login',{email:"marwane.assou@gmail.com"});
    }
    const test=async ()=>{
        await axiosInstance.post('/test');

    }

    return (
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max:grid-cols-4">
            <div className="rounded-lg ">
                <div className="h-48 max:h-64">
                    <img src={image2} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Soncsophone</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <Link to="/detailsProduct" className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'  >Details</Link>
                    <button className='text-black bg-white hidden' onClick={()=>log()}>click</button>
                    <button className='text-black bg-white hidden' onClick={()=>test()}>test</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-64">
                    <img src={guitar} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-64">
                    <img src={piano} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>



        </div>
    );
}

export default Products;
