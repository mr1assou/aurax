
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
                    <img src="/assets/login_image.jpg" alt="" className='w-full h-full object-cover rounded-lg' />
                </div>
                <p className='text-brown font-black mt-2 text-xs'>Casablanca</p>
                <div className='flex justify-between items-center mt-1'>
                    <p className=' text-white font-bold text-xs'>300 DH</p>
                    <button className='bg-brown text-white px-3 py-2 font-bold rounded-sm text-xs'>Book Now</button>
                </div>
            </div>
           
        </div>
    );
}

export default Products;
