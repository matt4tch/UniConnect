import { Link } from 'react-router-dom'
const Topbar = () => {
    return ( 
        <nav className='flex space-x-16 justify-center items-center p-9 m-auto text-black bg-[#FCFFFC] border-[#34453D] border-b-2 rounded-b-3xl' >
             <div className='text-xl no-underline hover:text-slate-700'>
                <Link className='text-gray border-0 rounded-xl cursor-pointer' to="/">Home</Link>
             </div>
             <header className="text-5xl text-[#25312b] font-serif">UniConnect</header>
             
             <div className='flex-start-end text-xl no-underline   hover:text-slate-700'>
                <Link className='text-gray border-0 rounded-xl cursor-pointer' to="/your-location">Use Tool</Link>
             </div>
        </nav> 
     );
}
 
export default Topbar;

