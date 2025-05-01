import image2 from '../../assets/instrument.jpg'
import guitar from '../../assets/guitar.jpg'
import piano from '../../assets/piano.jpg'
import { Link, NavLink } from 'react-router-dom'; 
import axiosInstance from '../../Axios';  // Import your axios instance
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpg'
import p6 from '../../assets/p6.jpg'
import p7 from '../../assets/p7.jpg'
import p8 from '../../assets/p8.jpg'
import p9 from '../../assets/p9.jpg'
import p10 from '../../assets/p10.jpg'
import p11 from '../../assets/p11.jpg'
import p12 from '../../assets/p12.jpg'
import p14 from '../../assets/p14.jpg'
import p15 from '../../assets/p15.jpg'

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
                    <img src={p2} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <Link to="/detailsProduct" className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'  >Details</Link>
                    <button className='text-black bg-white hidden' onClick={()=>log()}>click</button>
                    <button className='text-black bg-white hidden' onClick={()=>test()}>test</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={p11} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Bass Guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={piano} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Piano</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={p1} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Keyboard</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={p2} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Cello</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={p3} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Harp</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={p4} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Organ</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={p5} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Recorder</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={p7} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={p9} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>guitar</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={p10} alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Keyboard</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>3500 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Details</button>
                </div>
            </div>
            <div className="rounded-lg ">
                <div className="h-48 max:h-48">
                    <img src={p14} alt="" className='w-full h-full object-cover rounded-lg' />
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
