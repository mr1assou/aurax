import event1 from '../../assets/event1.jpg'
import event2 from '../../assets/event2.jpg'
import event3 from '../../assets/event3.jpg'
import event4 from '../../assets/event4.jpg'
import event5 from '../../assets/event5.jpg'
import event6 from '../../assets/event6.jpg'
import event7 from '../../assets/event7.jpg'
import event8 from '../../assets/event8.jpg'
import event9 from '../../assets/event9.jpg'
import event10 from '../../assets/event10.jpg'
import event11 from '../../assets/event11.jpg'
import event12 from '../../assets/event12.jpg'
import event13 from '../../assets/event12.jpg'
import event14 from '../../assets/event14.jpg'
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
                <div className="h-48 max:h-48">
                    <img src={event1} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Soncsophone</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={event2} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={event3} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={event4} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={event5} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={event6} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={event7} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={event8} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={event9} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={event10} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={event11} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={event12} alt="" className='w-full h-full object-cover rounded-lg' />
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
